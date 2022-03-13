import "./Home.css";
const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="h1">Bienvenido a TCG-Market</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="p">
                            Este es un sitio web para comprar cartas tanto de Yu-Gi-Oh, Cardfight Vanguard y Digimon TCG.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="p">
                            Si quieres comprar cartas de Yugioh, puedes hacerlo en este sitio web.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="p">
                            Si quieres comprar cartas de Cardfight Vanguard, puedes hacerlo en este sitio web.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="p">
                            Si quieres comprar cartas de Digimon TCG, puedes hacerlo en este sitio web.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;