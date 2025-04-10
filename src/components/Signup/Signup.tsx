import './Signup.css'

const SignUp = () => {
    return(
        <div className="signup">
            <h1>Create an Account</h1>
            <div className='input'>
                <div>
                    E-mail Adress
                </div>
                <input type='email'></input>
            </div>
            <div className='input'>
                <div>
                    Password
                </div>
                <input type='text'></input>
            </div>
            <div className="register">
                <button className="registerButton">Register</button>
            </div>

        </div>
    )
}

export default SignUp