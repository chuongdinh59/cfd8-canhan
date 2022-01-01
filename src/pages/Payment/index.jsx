import React from 'react';
import {Link} from 'react-router-dom'

function PayMent(props) {
    
    const list = [
        {
            id: 1,
            method: 'A'
        },
        {
            id: 2,
            method: 'B'
        },
        {
            id: 3,
            method: 'C'
        },
        {
            id: 4,
            method: 'D'
        },
    ]
    return (
        <div>
            PayMent
            {
                list.map(item => <li><Link to={`${item.method}`}>Method {item.id}</Link></li>)
            }
        </div>
    );
}

export default PayMent;