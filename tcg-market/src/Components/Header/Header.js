import './Header.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LoginView from '../LoginComponent/LoginView';
const Header = () =>{
    return (
    <header>
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><p>TCG-Market</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <BrowserRouter>
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><p>Home</p></Nav.Link>
                            <Route path="/login" element={<LoginView />}/>
                            <Nav.Link href=""><p>Login</p></Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </BrowserRouter>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
    )
}
    
export default Header;