import Logo from '../../../assets/img/logo.png';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import HeaderSidebar from '../HeaderSidebar/HeaderSidebar.component';

import './HeaderDesktop.styles.scss';

const Header  = () => {
    return (
        <>
        <Navbar className='header'>
                  <Container>
                    <Navbar.Brand className='header__logo'>
                      <img src={Logo} className='header__logo--img' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbarLabel" className='header__navbar--toggler' />
                    <HeaderSidebar/>
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
                    {/* <div className="navbar__sidebar--icon-container">
                      <img src={SideBarIcon} alt="" className="navbar__sidebar--icon" />
                    </div> */}
                  </Container>
        </Navbar>
        </>
    )
};

export default Header;