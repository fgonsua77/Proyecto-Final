import { Button } from "react-bootstrap";

const AccountCredit = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h1>Crédito</h1>
                </div>
                <div className="card-body m-3">
                    <h4 class="card-title">Crédito : {props.credit}€</h4>
                    <Button className="mt-3" variant="primary">Ingresar más crédito</Button>
                    <Button className="mt-3" variant="primary">Retirar crédito</Button>
                </div>
            </div>
        </>
    );
};


export default AccountCredit;