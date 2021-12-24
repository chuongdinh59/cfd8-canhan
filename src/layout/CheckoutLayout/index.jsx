import React from 'react';
import Header from '../../component/Header';
import DropdownMenu from '../../component/DropdownMenu'
import Position from '../../component/Position'
import {Outlet} from 'react-router-dom'
function CheckoutLayout(props) {
    return (
        <>
            <Header />
            <DropdownMenu />
            <Position />
            <Outlet />
        </>
    );
}

export default CheckoutLayout;