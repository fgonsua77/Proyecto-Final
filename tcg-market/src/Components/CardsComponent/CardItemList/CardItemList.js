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
                            <span>Juego</span>
                        </td>
                        <td>
                            <span>Expansion</span>
                        </td>
                        <td>
                            <span>Nombre</span> 
                        </td>
                        <td>
                            <span>Número</span>

                        </td>
                        <td>
                            <span>Disponible</span>
                        </td>
                        <td>
                            <span>Desde</span>
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