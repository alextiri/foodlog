import "./Password.css"

const Password = () => {
    return (
        <div className = "password">
            <h1>Reset your Password</h1>
            <div>
                Old Password
                <input type = "text"></input>
            </div>
            <div>
                New Password
                <input type = "text"></input>
            </div>
        </div>
    )
}

export default Password