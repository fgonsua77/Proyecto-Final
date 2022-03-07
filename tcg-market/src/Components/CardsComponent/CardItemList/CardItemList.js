import CardItem from '../CardItem';
import './CardItemList.css';

const CardItemList = ({cards = []}) => {
    return (
        <div className="cardItemList" class="row">
            {cards.map(card => <CardItem key={card.id} card={card} />)}
        </div>
    );
}

export default CardItemList;