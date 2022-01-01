import React from 'react';
import {  Link } from "react-router-dom";
function Address(props) {
    
    const listAddress = [
        {
            id: 1,
            base: 'Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh',
        },
        {
            id: 2,
            base: 'lầu 2, số 666/46/29, đường 3 tháng 2, phường 14, quận 10, TPHCM.',
        }
    ]


    return (
        <div>
            ADDRESS PAGE
            {
                listAddress.map( (address,index) => <li key={index}><Link to = {`${address.id}`}>{address.base}</Link></li>)
            }
        </div>
    );
}

export default Address;