import React from 'react';
import { useSelector } from 'react-redux';

function Home(props) {
    const { user } = useSelector(store => store.test)
    console.log(user);
    return (
        <div>
            Home

            <p>Xin chào 
                {user?.username}
            </p>
            
        </div>
    );
}

export default Home;