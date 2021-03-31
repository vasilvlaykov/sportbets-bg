import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0rem 4rem;
    z-index: 10;
    box-shadow: 0px 5px 10px -5px #111;
    position: relative;
`

export const NavLogo = styled(Link)`
    color: #283c2a;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    padding: 0.2rem 4rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #4D8A4F;
    }
`

export const NavLink = styled(Link)`
    color: #283c2a;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    padding: 0 4rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #4D8A4F;
        border-bottom: 0.2rem solid #4D8A4F;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #4D8A4F;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    padding: 15px 20px;
    border-radius: 30px;
    font-weight: bold;
    align-content: center;
    background: #4D8A4F;
    padding: 10px 22px;
    color: #fff;
    border: 2px solid #4D8A4F;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #fff;
        color: #4D8A4F;
    }
`