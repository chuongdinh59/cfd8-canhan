import React, { forwardRef, useImperativeHandle } from 'react';
import Input from '../../../component/Input';
import Select from '../../../component/Select';
import { useForm } from '../../../hooks/useForm';
import BillHeading from '../BillHeading';
import './style.scss';
const BillInfo = forwardRef((props, ref) => {
    const { register, form, error, validate } = useForm()

    useImperativeHandle(ref, () => {
        return {
            validate,
            form
        }
    }, [validate, form])

    return (
        <div className='bill__info form'>
            <BillHeading desc = 'Please enter your billing info' step={1}/>
            <form className="form__inputs">
                <Input label='First name' placeholder='First name' register={{ ...register('firstname', { required: true }, {required: 'First name là bắt buộc'}) }} error={error}/>
                <Input label='name' placeholder='Last name'register={{...register('lastname', {required: true},{required: 'Last name là bắt buộc'})}} error={error}/>
                <Input label='email' placeholder='Email address'register={{...register('email', {required: true , pattern: 'email'},{required: 'Email là bắt buộc', pattern: 'Email không hợp lệ'})}} error={error}/>
                <Input label='phone ' placeholder='Phone number'register={{...register('phone', {required: true, pattern: 'phone'},{required: 'Số điện thoại là bắt buộc', pattern: 'Số điện thoại không hợp lệ'})}} error={error}/>
                <Input label='address' placeholder='Address' register={{...register('address', {required: true},{required: 'Địa chỉ là bắt buộc'})}} error={error}/>
                <Input label='district' placeholder='Town / City'register={{...register('city', {required: true},{required: 'Thành phố là bắt buộc'})}}error={error} />
                {/* <Input label='State / Country' placeholder='State / Country'register={{...register('state', {required: true},{})}} error={error}/> */}
                <Select label='province' register={{...register('state', {required: true},{})}} error={error}/>
                <Input label='ZIP/Postal code' placeholder='ZIP/Postal code' register={{ ...register('zip', { required: true }, {required: 'Zip chỉ là bắt buộc'}) }} error={error} />
                <Input label='' placeholder='Ship to a different address?' checkbox={true} register={{ ...register('ship', { required: false }, {}) }} error={error}/>
            </form>
        </div>
    );
})

export default BillInfo;


