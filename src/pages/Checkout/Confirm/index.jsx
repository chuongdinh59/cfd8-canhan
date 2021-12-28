import React from 'react';
import BillHeading from '../BillHeading'
import Input from '../../../component/Input'

import './style.scss'
function Confrimation({register, error}) {
    return (
        <div className='bill_cofirm form'>
            <BillHeading title='Confirmation' desc='We are getting to the end. Just few clicks and your order si ready!' step={5} />
            <div className="form__confirm">
                <Input checkbox placeholder='I agree with sending an Marketing and newsletter emails. No spam, promissed!' register={{...register('confirm1', { required: true }, {required: 'Bạn cần xác nhận'})}} error={error} />
                <Input checkbox placeholder='I agree with our terms and conditions and privacy policy.' register={{...register('confirm2', { required: true }, {required: 'Bạn cần xác nhận'}) }} error={error}/>
            </div>
            
        </div>
    );
}

export default Confrimation;