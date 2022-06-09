import "./Register.css"

function Register() {
    return (
        <div className="register">
            <section>
                <h1>Registro</h1>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Login" />
                <input type="password" placeholder="Senha" />
                <button>Registrar</button>
            </section>
        </div>
    )
}

export { Register }