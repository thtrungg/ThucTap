import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import '../index.css'

function HeaderBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to='/' className='navbar-brand'>Demo App</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link to="/" className='nav-link'>Home</Link>
            <Link to="sport" className='nav-link'>Sport</Link>
            <Link to="aboutus" className='nav-link'>About Us</Link>
            <Link to="invoices" className='nav-link'>Invoices </Link>
            <Link to="weather" className='nav-link'>Weather </Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderBar;