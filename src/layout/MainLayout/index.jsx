import React from 'react';
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { Outlet } from 'react-router-dom'
import DropdownMenu from '../../component/DropdownMenu';


function MainLayout(props) {
    return (
        <>
            <Header />
            <DropdownMenu />
            <Outlet />
            
            <Footer />
        </>
    );
}

export default MainLayout;