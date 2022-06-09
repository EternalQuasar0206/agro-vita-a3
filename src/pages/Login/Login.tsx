import "./Login.css"

function Login() {
    return (
        <div className="login">
            <section>
                <h1>Login</h1>
                <input type="text" placeholder="Login" />
                <input type="password" placeholder="Senha" />
                <button>Fazer Login</button>
            </section>
        </div>
    )
}

export { Login }