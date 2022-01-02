import Logo from '../../assets/img/logo.png';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';

import './Header.styles.scss';

const Header  = () => {
    return (
        <>
        <Navbar className='header'>
                  <Container>
                    <Navbar.Brand className='header__logo'>
                      <img src={Logo} className='header__logo--img' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ms-auto  header__nav--container" >
                        <NavDropdown title="Programs" id="basic-nav-dropdown">
                        </NavDropdown>
                        <NavDropdown title="Live Projects" id="basic-nav-dropdown">
                        </NavDropdown>
                        <Nav.Link >Community</Nav.Link>
                        
                        <NavDropdown title="Jobs" id="basic-nav-dropdown">
                        </NavDropdown>
                        <Nav.Link href="#home">About</Nav.Link>
                        
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
        </Navbar>
        </>
    )
};

export default Header;