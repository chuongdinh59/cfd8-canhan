import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile(props) {
    const { user } = useSelector(store => store.auth);
    return (
        <div>
            name: {user.username} <br/> 
            {/* email: {user.email} */}
        </div>
    );
}

export default MyProfile;