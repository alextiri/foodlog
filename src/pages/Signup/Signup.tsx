import './Signup.css'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)

    const validate = (email: string) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email)
    }

    const submit = async() => {
        setLoading(true)
        if(validate(email) === false) {
            setError("E-mail address not valid")
            setLoading(false)
            return
        }
        if(password.length < 7) {
            setError("Password too short")
            setLoading(false)
            return
        }
        
        const response = await fetch("http://localhost:3000/signup", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        if(!response.ok) {
            const responseJSON = await response.json()
            setError(responseJSON.message)
            setLoading(false)
            return
        }
        setLoading(false)
        navigate('/')
    }


    return(
        <div className="signup">
            <h1>Create an Account</h1>
            <div className='input'>
                <div>E-mail Adress</div>
                <input type='email' onChange={(event) => setEmail(event.target.value)}></input>
            </div>
            <div className='input'>
                <div>Password</div>
                <input type='password' onChange={(event) => setPassword(event.target.value)}></input>
            </div>
            <div className="error">
                {error}
            </div>
            <div className="register">
                <button disabled={loading} className="registerButton" onClick={submit}>Register</button>
                <button className="cancelButton" onClick={() => navigate("/")}>Cancel</button>
            </div>
        </div>
    )
}

export default SignUp