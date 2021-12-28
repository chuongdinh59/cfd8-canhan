import React from 'react';
import Input from '../../../../component/Input'
import './style.scss'
import classnames from 'classnames'
function PrivateMethod({ register = () => {}, error = () => {}}) {
    return (
        <div className={classnames('method__card', 'card')} >
            <Input label='Card number' placeholder='Card number' register={{ ...register('cardnumber', { required: true }, {required: 'Chưa nhập số thẻ'}) }} error={error}/>
            <div className="card__main">
                <Input label='Card holder' placeholder='Card holder'register={{ ...register('cardholder', { required: true }, {required: 'Chưa nhập số thẻ'}) }} error={error}/>
                <Input label='Expiration date'placeholder='DD/MM/YY'register={{ ...register('carddate', { required: true }, {required: 'Chưa nhập số thẻ'}) }} error={error}/>
                <Input label='CVC'placeholder='CVC'register={{ ...register('CVC', { required: true }, {required: 'Chưa nhập số thẻ'}) }} error={error}/>
            </div>
        </div>
    );
}

export default PrivateMethod;