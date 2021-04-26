import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import './index.css';
import { Nav, NavLink, NavLogo, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import NavbarImage from './NavbarImage';


export default function Navbar() {
    const { logout, currentUser } = useAuth()
    const history = useHistory()
    const setError = useState("")


    function toProfile() {
        history.push('/profile')
    }

    async function handleLogout() {
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to logout')
        }


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
                    <NavLink to="/tips" >
                        TIPS
                    </NavLink>
                    <NavLink to="/partners" >
                        PARTNERS
                    </NavLink>
                    <NavLink to="/contact" >
                        CONTACTS
                    </NavLink>
                </NavMenu>
                <NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login"
                            style={{ display: currentUser ? "none" : "initial" }}
                        >LOGIN</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink className="reg-btn" to="/register"
                            style={{ display: currentUser ? "none" : "initial" }}
                        >SIGN UP</NavBtnLink>
                    </NavBtn>
                    <Button onClick={toProfile}
                        style={{ display: !currentUser ? "none" : "flex", fontWeight: "bold", background: "#fff", border: "2px solid #fff", color: "#000", marginRight: "1rem", outline: "none" }}
                    >
                        {currentUser ? currentUser.email : 0}
                    </Button>
                    <Button onClick={handleLogout}
                        style={{ display: !currentUser ? "none" : "initial", padding: "12px 20px", borderRadius: "30px", fontWeight: "bold", background: "#FF9100", border: "2px solid #FF9100" }}
                    >LOGOUT
                    </Button>
                </NavMenu>
            </Nav>
            <NavbarImage></NavbarImage>
        </>
    )
}

