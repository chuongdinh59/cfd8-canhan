import React from 'react';
import {Navigate} from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext';

function Forgot() {
    const { login } = useAuth()

    if (login) return <Navigate to='/profile' />

    return (
        <div>
            Forgot Password
        </div>
    );
}

export default Forgot;