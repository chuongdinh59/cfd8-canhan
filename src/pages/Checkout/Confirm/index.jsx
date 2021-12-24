import React from 'react';
import BillHeading from '../BillHeading'
import Input from '../../../component/Input'
import Button from '../../../component/Button/Button'

import './style.scss'
function Confrimation(props) {
    return (
        <div className='bill_cofirm form'>
            <BillHeading title='Confirmation' desc='We are getting to the end. Just few clicks and your order si ready!' step={5} />
            <div className="form__confirm">
                <Input name='' checkbox placeholder='I agree with sending an Marketing and newsletter emails. No spam, promissed!'/>
                <Input name='' checkbox placeholder='I agree with our terms and conditions and privacy policy.'/>
            </div>
            <Button content='Complete order' size='large' bgcolor='bright' color='white' />
            <div className="form__policy">
                <img src="img/safe.png" alt="safe" />
                <h3 className="commit">All your data are safe</h3>
                <p className="policy">
                     We are using the most advanced security to provide you the best experience ever.
                </p>

            </div>
        </div>
    );
}

export default Confrimation;