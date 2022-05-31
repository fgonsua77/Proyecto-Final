
import { Link } from "react-router-dom";
const GameListItem = (props) => {
    const { game } = props;

    return (
        <>
            <tr>
                <td className="font-link">
                    <Link to={`/games/${game.id}`}>
                        {game.name}
                    </Link>
                </td>
                <td className="font-link">
                    {game.company}
                </td>
            </tr>
        </>
    );
}

export default GameListItem;