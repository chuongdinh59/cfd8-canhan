import React from 'react';
import './style.scss'
function InformationBar(props) {
    return (
        <ul className="information">
            <ul className="information__left">
                <li className="information__item">
                    <a href="#!" className="information__link">Chat with us</a>
                </li>
                <li className="information__item">
                    <a href="#!" className="information__link">+420 336 775 664</a>
                </li>
                <li className="information__item">
                    <a href="#!" className="information__link">info@freshnesecom.com</a>
                </li>
            </ul>
            <ul className="information__right">
                <li className="information__item">
                    <a href="#!" className="information__link">Blog</a>
                </li>
                <li className="informationr__item">
                    <a href="#!" className="information__link">About Us</a>
                </li>
                <li className="information__item">
                    <a href="#!" className="information__link">Careers</a>
                </li>
            </ul>
        </ul>
    );
}

export default InformationBar;