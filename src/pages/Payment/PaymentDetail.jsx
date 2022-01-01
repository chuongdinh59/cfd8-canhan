import React from 'react';
import {useParams, Link} from 'react-router-dom'
function PaymentDetails(props) {
    
    const { method } = useParams();

    const listBank = [
        {
            id: 1,
            name: 'AgriBank'
        },
        {
            id: 2,
            name: 'Sacombank'
        },
        {
            id: 3,
            name: 'ACB'
        },
        
    ]
    return (
        <div>
            PAYMENT DETAIL {method}
            {
                method === 'A' && 
                listBank.map(bank => <li><Link to = '/'>{bank.name}</Link></li>)
            }
        </div>
    );
}

export default PaymentDetails;