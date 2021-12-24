import React from 'react';
import BillHeading from '../BillHeading';
import Method from '../Method';
import './style.scss'
function BillMetod(props) {
    return (
        <div className="bill__method form">
            <BillHeading title='Billing method' step={2} desc={'Please enter your payment method'}/>
            <div className="form__method">
                <Method name={'FedEx'} price={'+32 USD'} logo={'./img/fedex.png'}/>
                <Method name={'BSWSASA'} price={'+150 USD'} logo={'./img/dhl.png'}/>
            </div>
        </div>
    );
}

export default BillMetod;