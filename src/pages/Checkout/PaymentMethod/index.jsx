import React from 'react';
import BillHeading from '../BillHeading';
import './style.scss'
import Method from '../Method';

function PaymentMethod(props) {
    return (
        <div className='payment__method form'>
            <BillHeading title='Payment method' step={3} desc={'Please enter your payment method'} />
            <div className="form__method">
                <Method name={'Credit card'}  logo={'./img/visa.png'}/>
                <Method name={'PayPal'} logo={'./img/paypal.png'} />
                <Method name={'Bitcoin'}  logo={'./img/bitcoin.png'}/>
            </div>
        </div>
    );
}

export default PaymentMethod;