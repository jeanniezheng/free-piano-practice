import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../stylesheet/nav.css"


function NavDisplay() {
    return (
        <Navbar className="color-nav justify-content-center" variant="dark" >
            <Navbar.Brand className="title" href="/">FreePianoPractice</Navbar.Brand>
        </Navbar>
    );
}

export default NavDisplay;