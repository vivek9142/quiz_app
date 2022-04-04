import {Navbar,Nav,NavDropdown } from 'react-bootstrap';

import './NavBarCollapse.styles.scss';

const NavBarCollapse = props => {
    return (
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
    )
  };

export default NavBarCollapse;