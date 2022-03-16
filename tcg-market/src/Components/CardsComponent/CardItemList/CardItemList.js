import CardItem from '../CardItem';
import './CardItemList.css';
import CardGroup from 'react-bootstrap/CardGroup';
import {cartContext} from '../../../Context/CartContext';
const CardItemList = ({cards = []}) => {
    return (
        <div className="cardItemList" class="row">
            <CardGroup>
                {cards.map(carta => <CardItem key={carta.id} carta={carta} onComprar={(carta, cantidad) => cartContext.setCart([...cartContext.cart,{ ...carta, cantidad },])}/>)}
            </CardGroup>
        </div>
    );
}

export default CardItemList;