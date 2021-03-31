import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import './index.css';
import { Nav, NavLink, NavLogo, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import NavbarImage from './NavbarImage';


const Navbar = () => {
    const  {logout}   = useAuth()
    const history = useHistory()


    async function handleLogout() {
        await logout()
        history.push('/')
    }

    return (
        <>
            <Nav>
                <NavLogo to="/">
                    <img src={require('../../images/logo-phoenix.png').default} alt='logo'
                        style={{ maxWidth: '100px' }} />
                </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" >
                        ЗА НАС
                    </NavLink>
                    <NavLink to="/tips" >
                        ПРОГНОЗИ
                    </NavLink>
                    <NavLink to="/game" >
                        ИГРА НА ФЕНИКСА
                    </NavLink>
                </NavMenu>
                <NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login"
                        //style={{display: currentUser ? "none" : "initial"}}
                        >ВХОД</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink className="reg-btn" to="/register"
                        //style={{display: currentUser ? "none" : "initial"}}
                        >РЕГИСТРАЦИЯ</NavBtnLink>
                    </NavBtn>
                    <Button onClick={handleLogout}                        
                        //style={{display: !currentUser ? "none" : "initial"}}
                        >ИЗХОД
                    </Button>
                </NavMenu>
            </Nav>
            <NavbarImage></NavbarImage>
        </>
    )
}

export default Navbar
