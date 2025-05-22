import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import './Login.css'
import { TokenContext } from '../../contexts/TokenContext';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const [loading, setLoading] = useState<boolean>(false)
    const setToken = useContext(TokenContext).setToken

    const login = () => {
        setLoading(true)
        fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(result => result.json())
        .then(result => {
            if(typeof result.token === "string") {
                setToken(result.token)
                setLoading(false)
                navigate('home')
            }
            else {
                setError(result.message)
                setLoading(false)
            }
        }) 
    }

    return (
        <div className = 'comp'>
            <h1>Sign in here</h1>
            <div className = 'login'>
                <div className = 'email'>
                    <div>E-mail</div>
                    <input type = "email" onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className = 'password'>
                    <div>Password</div>
                    <input type = "password" onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <div className = "error">
                    {error}
                </div>
            </div>
            <div className="buttons">
                <button disabled={loading} className = 'signin' onClick={login}>Sign in</button>
                <button onClick={() => {
                    navigate('signup')
                }}>Sign up</button>
            </div>
        </div>
    )
}

export default Login;