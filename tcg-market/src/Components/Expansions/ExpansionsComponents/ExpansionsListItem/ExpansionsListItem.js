import { Link } from "react-router-dom";
const ExpansionsListItem = (props) => {
    const { expansion } = props;
    return (
        <>
            <tr>
                <td>
                    <Link to={`/expansions/${expansion.id}`}>
                        <span>{expansion.name}</span>
                    </Link>
                </td>
                <td>
                    <span>{expansion.code}</span>
                </td>
                <td>
                    <span>{expansion.juego.name}</span>
                </td>
                <td>
                    <span>{expansion.releasedate}</span>
                </td>
            </tr>
        </>
    );
}

export default ExpansionsListItem;