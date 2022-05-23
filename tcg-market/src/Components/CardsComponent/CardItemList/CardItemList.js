import CardItem from '../CardItem';
import './CardItemList.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Table from 'react-bootstrap/Table';
import {cartContext} from '../../../Context/CartContext';
const CardItemList = ({cards = []}) => {
    return (
        <div className="cardItemList d-flex justify-content-center col p-2" class="row">

            <Table>
                <thead>
                    <tr>
                        <td>
                            Expansion
                        </td>
                        <td>
                            Nombre
                        </td>
                        <td>
                            Número
                            
                        </td>
                        <td>
                            Disponible
                        </td>
                        <td>
                            Desde
                        </td>
                    </tr>
                </thead>
                <tbody>
                {cards.map(carta => <CardItem key={carta.id} carta={carta}/>)}
                </tbody>
                
            </Table>
        </div>
    );
}

export default CardItemList;