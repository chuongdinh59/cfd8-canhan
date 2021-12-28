import BillHeading from '../BillHeading';
import './style.scss'
import Method from '../Method';
import PrivateMethod from './PrivateMethod';
import { useState } from 'react';
const data = [
    {
        group: 'payment__method',
        paymethod: 'creditcard',
        name: 'Credit card',
        logo: './img/visa.png'
    },
    {
        group: 'payment__method',
        paymethod: 'paypal',
        name: 'PayPal',
        logo: './img/paypal.png'
    },
    {
        group: 'payment__method',
        paymethod: 'bitcoin',
        name: 'Bitcoin',
        logo: './img/bitcoin.png'
    },
]
function PaymentMethod({ register, error, form }) {
    const [isOpen, setOpen] = useState(null)
    const handleDrop = (index) => {
        const keys = ['cardnumber', 'carddate', 'cardholder', 'CVC']
        form && error && keys.forEach(key => {
            error[key] = ''
            form[key] = ''
        })
        setOpen(index);
    }
    return (
        <div className='payment__method form'>
            <BillHeading title='Payment method' step={3} desc={'Please enter your payment method'} />
            <div className="form__method">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="form__item" >
                                <div onClick={() => handleDrop(index)} >
                                    <Method group={item.group} name={item.name} logo={item.logo} register={{ ...register('paymethod', {required: true}, {required: 'Phương thức thanh toán bắt buộc'}), value:item.paymethod }}/>
                                </div>
                                <div className={`method__details ${isOpen === index ? 'show-content' : 'content'}`} >
                                    {
                                        isOpen === index ? <PrivateMethod register={register} error={error}/> : <PrivateMethod />
                                    }
                                </div>
                            </div>
                        )
                    })
               }

            </div>
            <p className="error-text">{error && error['paymethod']}</p>
        </div>
    );
}

export default PaymentMethod;


