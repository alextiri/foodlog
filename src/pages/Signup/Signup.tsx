import './Signup.css'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <div className="signup">
            <h1>Create an Account</h1>
            <div className='input'>
                <div>E-mail Adress</div>
                <input type='email' onChange={(event) => setEmail(event.target.value)}></input>
            </div>
            <div className='input'>
                <div>Password</div>
                <input type='text' onChange={(event) => setPassword(event.target.value)}></input>
            </div>
            <div className="register">
                <button className="registerButton" onClick={() => {
                    fetch("http://localhost:3000/signup", {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            email: email,
                            password: password
                        })
                    })
                    .then(result => result.json())
                    .then(result => navigate("/"))
                }
                }>Register</button>
                <button className="cancelButton" onClick={() => navigate("/")}>Cancel</button>
            </div>
        </div>
    )
}

export default SignUp