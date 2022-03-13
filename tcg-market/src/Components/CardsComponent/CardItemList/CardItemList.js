import CardItem from '../CardItem';
import './CardItemList.css';
import CardGroup from 'react-bootstrap/CardGroup';
const CardItemList = ({cards = []}) => {
    return (
        <div className="cardItemList" class="row">
            <CardGroup>
                {cards.map(card => <CardItem key={card.id} card={card} />)}
            </CardGroup>
        </div>
    );
}

export default CardItemList;