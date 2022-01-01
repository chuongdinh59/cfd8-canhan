import React from 'react';
import  {Outlet} from 'react-router-dom'
function AuthenLayout(props) {
    return (
        <div>
            Authen Page
            
            <Outlet/>
        </div>
    );
}

export default AuthenLayout;