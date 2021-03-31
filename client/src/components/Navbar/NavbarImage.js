import React from 'react'
import '../../pages-styles/home.css'

const NavbarImage = () => {
    return (
        <div>
            <img className="header-img" src={require('../../images/header.png').default}  alt='something'/>
        </div>
    )
}

export default NavbarImage;
