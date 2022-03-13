import './Header.css';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const Header = () =>{
    return (
    <header>
        <Navbar bg="primary" expand="lg">
            <Container class="d-flex justify-content-around">
                <Navbar.Brand href="/"><p class="h1">TCG-Market</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/cards"><p>Productos</p></Nav.Link>
                            <Nav.Link href="/login"><p>Login</p></Nav.Link>
                            <Nav.Link href="/signup"><p>Registrarse</p></Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
    )
}
    
export default Header;