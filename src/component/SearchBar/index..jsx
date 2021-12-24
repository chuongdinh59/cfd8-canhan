import React from 'react';
import HeaderSearch from './HeaderSearch';
import logo from '../../assets/img/Freshnesecom.png'
import HeaderUser from './HeaderUser';
import HeaderCart from './HeaderCart';
import './style.scss'
function HeaderBar(props) {
    return (
        <div className="header__main">
            <a href="#!" className="header__logo">
                <img src= {logo} alt="logo shop" />
            </a>    
           <HeaderSearch />
            <div className="header__control">
                <HeaderUser />
                <HeaderCart />
            </div>
        </div>
    );
}

export default HeaderBar;