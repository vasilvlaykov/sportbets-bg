import React from 'react'
import { FooterContainer, FooterLogo, FooterGroup, FooterLink, FooterFbIcon, FooterInstaIcon } from './FooterElements'

function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterLogo to="/">
                    <img src={require('../../images/full-white-logo.png').default} alt='logo'
                        style={{ maxWidth: '400px' }} />
                </FooterLogo>
                <FooterGroup>
                    <FooterLink to="/contact">КОНТАКТИ</FooterLink>
                    <FooterLink to="/partners">ПАРТНЬОРИ</FooterLink>
                </FooterGroup>
                <FooterGroup>
                    <FooterLink as="a" href="https://www.facebook.com/" target="_blank">
                        <FooterFbIcon></FooterFbIcon>
                        FACEBOOK
                    </FooterLink>
                    <FooterLink  as="a" href="https://www.instagram.com/" target="_blank">
                        <FooterInstaIcon></FooterInstaIcon>
                        INSTAGRAM
                    </FooterLink>
                </FooterGroup>
            </FooterContainer>
        </>
    )
}

export default Footer
