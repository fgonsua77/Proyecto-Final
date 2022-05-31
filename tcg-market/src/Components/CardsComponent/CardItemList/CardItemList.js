import CardItem from '../CardItem';
import './CardItemList.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Table from 'react-bootstrap/Table';
import { cartContext } from '../../../Context/CartContext';
const CardItemList = (props) => {
    const { cards } = props;
    console.log(cards);
    return (
        <div className="cardItemList d-flex justify-content-center col p-2" class="row">

            <Table striped bordered hover responsive="xl" className="pt-3">
                <thead>
                    <tr>
                        <td>
                            <span className="font-link">Juego</span>
                        </td>
                        <td>
                            <span className="font-link">Expansion</span>
                        </td>
                        <td>
                            <span className="font-link">Nombre</span> 
                        </td>
                        <td>
                            <span className="font-link">Número</span>

                        </td>
                        <td>
                            <span className="font-link">Disponible</span>
                        </td>
                        <td>
                            <span className="font-link">Desde</span>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {cards.map(carta => <CardItem key={carta.id} carta={carta} />)}
                </tbody>

            </Table>
        </div>
    );
}

export default CardItemList;