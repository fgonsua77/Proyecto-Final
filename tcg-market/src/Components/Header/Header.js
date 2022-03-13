import './Header.css';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const Header = () =>{
    return (
    <header>
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="/"><p class="h1">TCG-Market</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/cards"><p>Productos</p></Nav.Link>
                            <Nav.Link href="/login"><p>Login</p></Nav.Link>
                            <Nav.Link href="/signup"><p>Registrarse</p></Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
    )
}
    
export default Header;