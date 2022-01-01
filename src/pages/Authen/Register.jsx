import React from 'react';
import {Navigate} from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext';

function Register() {
    const { login } = useAuth()
    
    if (login) return <Navigate to='/profile' />

    return (
        <div>
            Resgister
        </div>
    );
}

export default Register;