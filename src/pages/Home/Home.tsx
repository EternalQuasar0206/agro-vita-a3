import { BigButton } from "../../components/BigButton/BigButton"
import "./Home.css"
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()

    return (
        <div className="home-page">
            <section>
                <h1 className="title">Sua solução de emergência em produtos agrícolas</h1>
                <div>
                    <div className="item">
                        <img src="/img/icons/agricultura.png" />
                        <h3>Sustentável para a natureza</h3>
                    </div>
                    <div className="item">
                        <img src="/img/icons/agricultura-de-colheita.png" />
                        <h3>Proveitoso para o pequeno agricultor</h3>
                    </div>
                    <div className="item">
                        <img src="/img/icons/campo.png" />
                        <h3>Qualidade garantida</h3>
                    </div>
                </div>
                <BigButton onClick={() => navigate("/login")} text="Acessar" />
            </section>
        </div>
    )
}

export { Home }