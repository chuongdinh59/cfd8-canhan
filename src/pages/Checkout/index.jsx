import React from 'react';
import Button from '../../component/Button/Button';
import { useForm } from '../../hooks/useForm';
import BillInfo from './BillInfo';
import BillMetod from './BillMethod';
import Confrimation from './Confirm';
import MoreInfo from './MoreInfo';
import Order from './Order';
import PaymentMethod from './PaymentMethod';
import './style.scss';

function Checkout(props) {
    const {handleSubmit, register, error, form} = useForm()
    const submit = (form) => {
       console.log(form);
    }
    return (
        <>
            
        <div className="checkout">
            <div className="container checkout-container">
                    <form onSubmit={handleSubmit(submit)}>
                        <BillInfo register={register} error={error}/>
                        <BillMetod register={register} error={error}/>
                        <PaymentMethod register={register} error={error} form={form}/>
                        <MoreInfo />
                        <Confrimation register={register} error={error} />
                        <Button content='Complete order' size='large' bgcolor='bright' color='white' />
                        <div className="form__policy">
                            <img src="img/safe.png" alt="safe" />
                            <h3 className="commit">All your data are safe</h3>
                            <p className="policy">
                                We are using the most advanced security to provide you the best experience ever.
                            </p>

                        </div>
                    </form>
                    <aside>
                        <Order register={register} error={error} />
                    </aside>
            </div>
            </div>
            
            <footer className="footer">
                <div className="container">
                    <p >Copyright © 2020 Freshnesecom</p>
                </div>
            </footer>
        </>
    );
}

export default Checkout;