import React from 'react';
import InformationBar from '../InfomationBar/InformationBar';
import HeaderBar from '../SearchBar/index.';
import './style.scss'
function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <InformationBar />
                <HeaderBar />
            </div>
        </header>
    );
}

export default Header;