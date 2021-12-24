import React from 'react';
import Input from '../../../component/Input';
import BillHeading from '../BillHeading'
import './style.scss'
function BillInfo(props) {
    return (
        <div className='bill__info form'>
            <BillHeading desc = 'Please enter your billing info' step={1}/>
            <div className="form__inputs">
                <Input name='First name' placeholder='First name' />
                <Input name='Last name' placeholder='Last name'/>
                <Input name='Email address' placeholder='Email address'/>
                <Input name='Phone number' placeholder='Phone number'/>
                <Input name='Address' placeholder='Address'/>
                <Input name='Town / City' placeholder='Town / City'/>
                <Input name='State / Country' placeholder='State / Country'/>
                <Input name='ZIP/Postal code' placeholder='ZIP/Postal code'/>
                <Input name = '' placeholder='Ship to a different address?' checkbox={true}/>
            </div>
        </div>
    );
}

export default BillInfo;