import React from 'react';
import {Navigate} from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext';
function Reset() {
    
    const { login } = useAuth()
    if (login) return <Navigate to='/profile' />
    
    return (
        <div>
            Reset Pasword
        </div>
    );
}

export default Reset;