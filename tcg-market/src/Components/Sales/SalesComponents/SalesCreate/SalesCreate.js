
import axios from 'axios';
import { Form, Breadcrumb, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const SalesCreate = () => {
    const userId = localStorage.getItem('id');
    const username = useParams();
    const [cards, setCards] = useState([]);
    const [sale, setSale] = useState(
        {
            idseller: userId,
            idcard:1,
            price: "",
            state:"NEAR_MINT",
            comments: "",
            amount: "",
            language: "SPANISH",
            idpurchase: null
        }
    );
    async function saveSaleNormal (event) {
        const peticion = axios.post(`http://localhost:8080/sale/save/idseller=${userId}&idcard=${sale.idcard}&amount=${sale.amount}&price=${sale.price}&language=${sale.language}&comments=${sale.comments}&state=${sale.state}`)
            .then(response => {
                console.log(response);
                navigate(`/sales/${username}`);
            })
            .catch(err => console.log(err));
    }
    function handleChange(evt) {
        const value = evt.target.value;
        setSale({
          ...sale,
          [evt.target.name]: value
        });
      }
    useEffect(() => {
        fetch(`http://localhost:8080/apicartas/cartas`)
            .then(response => response.json())
            .then(cards => setCards(cards))
    }, []);

    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb className="d-flex col">
                            <Breadcrumb.Item className="font-link">
                                <Link to="/home" >
                                    Inicio
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="font-link">
                                <Link to={`/sales/${username}`}>
                                    Ventas
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="font-link">
                                Crear Venta
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className="font-link">Crear Venta</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Form onSubmit={() => saveSaleNormal(event)}>
                            <h3 className='font-link pt-3'>Selecciona la carta a vender!</h3>
                            <Form.Select onChange={handleChange} name="idcard" value={parseInt(sale.idcard,)}>
                                {cards.map(card => (
                                    <option key={card.id} value={card.id}>{card.name} - {card.code} / {card.expansion.code}</option>
                                ))}
                            </Form.Select>
                            <h3 className='font-link pt-3'>Selecciona el idioma</h3>
                            <Form.Select title="Selecciona el idioma" onChange={handleChange} name="language" value={sale.language}>
                                <option value="SPANISH" >Español</option>
                                <option value="ENGLISH" >Ingles</option>
                                <option value="FRENCH" >Frances</option>
                                <option value="ITALIAN" >Italiano</option>
                                <option value="GERMAN" >Aleman</option>
                            </Form.Select>
                            <h3 className='font-link pt-3'>Selecciona el precio en euros por unidad</h3>
                            <Form.Control
                                type="number"
                                id="price"
                                name="price"
                                onChange={handleChange}
                                value={sale.price}
                            />
                            <h3 className='font-link pt-3'>Selecciona la cantidad de unidades</h3>
                            <Form.Control
                                type="number"
                                id="quantity"
                                name="amount"
                                onChange={handleChange}
                                value={sale.amount}
                            />
                            <h3 className='font-link pt-3'>El estado de la(s) carta(s)</h3>
                            <Form.Select onChange={handleChange} name="state" value={sale.state}>
                                <option value="NEAR_MINT">Near Mint</option>
                                <option value="EXCELLENT">Excelente</option>
                                <option value="GOOD">Buena</option>
                                <option value="BAD">Mala</option>
                            </Form.Select>
                            <Form.Text className="col">
                                <span className="row font-link">Near Mint es un estado de carta casi perfecto</span>
                                <span className="row font-link">Excelente es un estado de carta que se encuentra en buen estado</span>
                                <span className="row font-link">Buena es un estado de carta que se encuentra en un estado normal</span>
                                <span className="row font-link">Bad es un estado de carta que se encuentra en mal estado</span>
                                <span className="row font-link">Según el tipo de carta, se debería considerar el precio.</span>
                            </Form.Text>
                            <Form.Group className="mb-3">
                                <Form.Label>Comentarios</Form.Label>
                                <Form.Control as="textarea" name="comments" onChange={handleChange} value={sale.comments} rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>

    );
};



export default SalesCreate;