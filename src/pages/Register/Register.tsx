import "./Register.css"
import react from "react"
import { useState } from "react"

function Register() {
    const [name, setName] = useState("");
    const updateName = (event: {
      target: { value: react.SetStateAction<string> };
    }) => {
      setName(event.target.value);
    };
    const [login, setLogin] = useState("");
    const updateLogin = (event: {
      target: { value: react.SetStateAction<string> };
    }) => {
      setLogin(event.target.value);
    };
    const [password, setPassword] = useState("");
    const updatePassword = (event: {
      target: { value: react.SetStateAction<string> };
    }) => {
      setPassword(event.target.value);
    };
  
    localStorage.setItem("name", name)
    localStorage.setItem("login", login)
    localStorage.setItem("password", password)
    return (
        <div className="register">
            <section>
                <h1>Registro</h1>
                <input type="text" placeholder="Nome" onChange={updateName}/>
                <input type="text" placeholder="Login" onChange={updateLogin}/>
                <input type="password" placeholder="Senha" onChange={updatePassword}/>
                <button onClick={() => {
                  if(!localStorage.getItem(login)) {
                    localStorage.setItem(login, JSON.stringify([name, password]));
                    alert("Registrado com sucesso, faça login para continuar");
                    return;
                  }

                  alert("Já existe esse registro");
                }}>Registrar</button>
                <button><a href="./Login">Já tem uma conta? Faça login aqui!</a></button>
                <a href="./Contact">Fale conosco</a>
                <a href="./AboutUS">Quem somos?</a>
            </section>
        </div>
    )
}

export { Register }