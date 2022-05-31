import "./Home.css"

function Home() {
    return (
        <div className="home-page">
            <section>
                <h1>Sua solução de emergência em produtos agrícolas</h1>
                <div>
                    <div className="item">
                        <img src="/img/icons/agricultura.png" />
                        <h3>Sustentável para a natureza</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export { Home }