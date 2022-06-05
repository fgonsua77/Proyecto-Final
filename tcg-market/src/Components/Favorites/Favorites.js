
import { Link } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CardItemList from "../CardsComponent/CardItemList/CardItemList";

const favorites = (props) => {
   const {user} = props;
    const Breadcrumbs = (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/home" >
                        Inicio
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <span className="font-link">Usuario</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="font-link">Favoritos</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );


    return (
        <>
            <div className="d-flex justify-content-center row">
                <div className="col">
                    {Breadcrumbs}
                    <h1 className="font-link">Favoritos</h1>
                    <CardItemList cards={user.favorites} />
                </div>
            </div>
        </>
    );
};

export default favorites;