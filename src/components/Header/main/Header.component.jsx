import React from 'react';
import useNameDimension from '../../../utils/useNameDimension';
import Logo from '../../../assets/img/logo.png';
import { Navbar,Container } from 'react-bootstrap';
import './Header.styles.scss';
import LoadingScreen from '../../Loader/LoadingScreen.component';

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
                      (<React.Suspense fallback={<LoadingScreen/>}>
                        <HeaderSidebar/>
                      </React.Suspense>)}
                      
                      
                      {(['md','lg','xl'].includes(dimension)) && 
                      (<React.Suspense fallback={<LoadingScreen/>}>
                      <NavBarCollapse/>
                      </React.Suspense>)}

                  </Container>
        </Navbar>
        </>
    )
};




export default Header;