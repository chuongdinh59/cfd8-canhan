import React from 'react';
import {Link} from 'react-router-dom'
function Order(props) {
    const list = [
        {
            id: 1,
            title: 'order 1'
        },
        {
            id: 2,
            title: 'order 2'
        },
        {
            id: 3,
            title: 'order 3'
        },
        {
            id: 4,
            title: 'order 4'
        },
        {
            id: 5,
            title: 'order 5'
        },
        {
            id: 6,
            title: 'order 6'
        },

    ]
    return (
        <div>
            Order
            {
                list.map(item => <li><Link to = {`${item.id}`} key={item.id}>{ item.title }</Link></li> )
            }
        </div>
    );  
}

export default Order;