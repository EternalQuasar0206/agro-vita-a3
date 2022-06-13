import "./Login.css";
import react from "react";
import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const updateName = (event: {
    target: { value: react.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };
  const [password, setPassword] = useState("");
  const updatePassword = (event: {
    target: { value: react.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  localStorage.setItem("name", name)
  localStorage.setItem("password", password)
  return (
    <div className="login">
      <section>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Login"
          id="login"
          onChange={updateName}
          />
        <input type="password" placeholder="Senha" id="senha" onChange={updatePassword} />
        <button onClick={() => {
          if(localStorage.getItem(name)) {
            const info = JSON.parse(localStorage.getItem(name) ?? "{}");
            if(info[1] === password) {
              alert("Logado com sucesso");
              return;
            }
          }
          
          alert("Erro no login");
        }}>Fazer Login</button>
        <button><a href="./register">Não tem uma conta? Crie uma conta aqui!</a></button>
        <a href="./contact">Fale conosco</a>
        <a href="./aboutUs">Quem somos?</a>
      </section>
    </div>
  );
}
export { Login };