import React from 'react';
import { Outlet } from "react-router-dom";
import { usePage } from '../Context/PageContex';

function MainLayout(props) {
    return (
        <div>
            App
            <Outlet />
     
        </div>
    );
}

export default MainLayout;