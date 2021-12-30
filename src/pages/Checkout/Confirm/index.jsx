import React, { forwardRef, useImperativeHandle } from 'react';
import BillHeading from '../BillHeading'
import Input from '../../../component/Input'

import './style.scss'
import { useForm } from '../../../hooks/useForm';
const Confrimation = forwardRef((props, ref) => {
    const { register, form, error, validate } = useForm()

    useImperativeHandle(ref, () => {
        return {
            validate,
            form
        }
    }, [validate, form])
    return (
        <div className='bill_cofirm form'>
            <BillHeading title='Confirmation' desc='We are getting to the end. Just few clicks and your order si ready!' step={5} />
            <form className="form__confirm">
                <Input checkbox placeholder='I agree with sending an Marketing and newsletter emails. No spam, promissed!' register={{...register('confirm1', { required: true }, {required: 'Bạn cần xác nhận'})}} error={error} />
                <Input checkbox placeholder='I agree with our terms and conditions and privacy policy.' register={{...register('confirm2', { required: true }, {required: 'Bạn cần xác nhận'}) }} error={error}/>
            </form>
            
        </div>
    );
})

export default Confrimation;