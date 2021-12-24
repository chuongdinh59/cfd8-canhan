import React from 'react';
import { Buy } from '../Icon';
function HeaderCart(props) {
    return (
        <a href="#!" className="header__cart">
            <Buy />
            <span className="bill">
                4
            </span>
    </a>
    );
}

export default HeaderCart;