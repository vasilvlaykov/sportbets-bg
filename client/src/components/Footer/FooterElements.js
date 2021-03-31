import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export const FooterContainer = styled.div`
    padding: 40px 60px;
    background: #4D8A4F;
    position: fixed;
    max-height: 200px;
    bottom: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
`

export const FooterGroup = styled.div`
    display: flex;
    flex-direction: column;
`

export const FooterLogo = styled(Link)`
`

export const FooterLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    padding: 5px 0rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-in-out;
        color: #ff8d00;
    }
`

export const FooterFbIcon = styled(FaFacebookSquare)`
    display: flex;
    align-self: center;
    font-size: 30px;
    margin-right: 10px;
`

export const FooterInstaIcon = styled(FaInstagram)`
    display: flex;
    align-self: center;
    font-size: 30px;
    margin-right: 10px;
`