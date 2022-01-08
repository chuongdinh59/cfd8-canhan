import React from 'react';
import { Outlet } from 'react-router-dom';
import DropdownMenu from '../../component/DropdownMenu';
import Header from '../../component/Header';
function CheckoutLayout(props) {
    return (
        <>
            <Header />
            <DropdownMenu />
            <Outlet />
        </>
    );
}

export default CheckoutLayout;