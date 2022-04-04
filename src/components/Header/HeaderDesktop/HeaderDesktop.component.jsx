import React from 'react';
import useNameDimension from '../../../utils/useNameDimension';
import Logo from '../../../assets/img/logo.png';
import { Navbar,Container } from 'react-bootstrap';
import './HeaderDesktop.styles.scss';

const HeaderSidebar = React.lazy(()=> import('../HeaderSidebar/HeaderSidebar.component'));
const NavBarCollapse = React.lazy(()=> import('../NavBarCollapse/NavBarCollapse.component'));



const Header  = () => {
    const dimension = useNameDimension();
    return (
        <>
        <Navbar className='header'>
                  <Container>
                      <Navbar.Brand className='header__logo'>
                        <img src={Logo} className='header__logo--img' alt="" />
                      </Navbar.Brand>
                      
                      {(['xs','sm'].includes(dimension)) && 
                      (<React.Suspense fallback={<h1>Loading...</h1>}>
                        <HeaderSidebar/>
                      </React.Suspense>)}
                      
                      
                      {(['md','lg','xl'].includes(dimension)) && 
                      (<React.Suspense fallback={<h1>Loading...</h1>}>
                      <NavBarCollapse/>
                      </React.Suspense>)}

                  </Container>
        </Navbar>
        </>
    )
};




export default Header;