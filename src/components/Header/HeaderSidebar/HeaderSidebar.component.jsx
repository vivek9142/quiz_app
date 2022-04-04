import { Navbar,Offcanvas,Nav,NavDropdown } from "react-bootstrap"
import Logo from '../../../assets/img/logo.png';

import './HeaderSidebar.styles.scss';

const HeaderSidebar = props => {
    return(
        <>
        <Navbar.Toggle aria-controls="offcanvasNavbarLabel" className='header__navbar--toggler' />
        <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                            <div className="offcanvas__logo--container">
                            <img src={Logo} alt="" className="offcanvas__logo"/>
                            </div>
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavDropdown title="Programs" id="basic-nav-dropdown">
                        </NavDropdown>
                        <NavDropdown title="Live Projects" id="basic-nav-dropdown">
                        </NavDropdown>
                        <Nav.Link >Community</Nav.Link>
                        
                        <NavDropdown title="Jobs" id="basic-nav-dropdown">
                        </NavDropdown>
                        <Nav.Link href="#home">About</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
        </Navbar.Offcanvas>
        </>
    )
}

export default HeaderSidebar;