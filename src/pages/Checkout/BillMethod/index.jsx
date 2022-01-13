import React, { forwardRef, useImperativeHandle } from 'react';
import { useForm } from '../../../hooks/useForm';
import BillHeading from '../BillHeading';
import Method from '../Method';
import './style.scss'
const BillMethod = forwardRef((props, ref) => {
    const { register, form, error, validate } = useForm()

    useImperativeHandle(ref, () => {
        return {
            validate,
            form
        }
    }, [validate, form])
    return (
        <>
            <div className="bill__method form">
                <BillHeading title='Billing method' step={2} desc={'Please enter your payment method'} />
            <form className="form__method">
                <Method group={'bill__method'} name={'FedEx'} price={'+32 USD'} logo={'./img/fedex.png'} register={{ ...register('shippingMethod', {required:true},{required:'Phương thức vận chuyển bắt buộc'}), value: 'FEDEX' }}/>
                <Method group={'bill__method'} name={'DHL'} price={'+150 USD'} logo={'./img/dhl.png'} register={{ ...register('shippingMethod',{required:true},{required:'Phương thức vận chuyển bắt buộc'} ), value: 'DHL' }}/>
            </form>
            <p className="error-text"> {error && error['billmethod']}</p>
        </div>
        </>
    );
})

export default BillMethod;