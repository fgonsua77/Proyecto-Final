import { Link } from "react-router-dom";
const ExpansionsListItem = (props) => {
    const { expansion } = props;
    return (
        <>
            <tr>
                <td>
                    <Link to={`/expansions/${expansion.id}`}>
                        <span className="font-link">{expansion.name}</span>
                    </Link>
                </td>
                <td>
                    <span className="font-link">{expansion.code}</span>
                </td>
                <td>
                    <span className="font-link">{expansion.juego.name}</span>
                </td>
                <td>
                    <span className="font-link">{expansion.releasedate}</span>
                </td>
            </tr>
        </>
    );
}

export default ExpansionsListItem;