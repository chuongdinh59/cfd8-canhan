import React from 'react';
import BillHeading from '../BillHeading';
import Method from '../Method';
import './style.scss'
function BillMethod({ register, error }) {
    return (
        <div className="bill__method form">
            <BillHeading title='Billing method' step={2} desc={'Please enter your payment method'} />
            <div className="form__method">
                <Method group={'bill__method'} name={'FedEx'} price={'+32 USD'} logo={'./img/fedex.png'} register={{ ...register('billmethod', {required:true},{required:'Phương thức vận chuyển bắt buộc'}), value: 'FEDEX' }}/>
                <Method group={'bill__method'} name={'DHL'} price={'+150 USD'} logo={'./img/dhl.png'} register={{ ...register('billmethod',{required:true},{required:'Phương thức vận chuyển bắt buộc'} ), value: 'DHL' }}/>
            </div>
            <p className="error-text">{error && error['billmethod']}</p>
        </div>
    );
}

export default BillMethod;