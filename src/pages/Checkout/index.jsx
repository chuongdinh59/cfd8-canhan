import React from 'react';
import BillInfo from './BillInfo';
import BillMetod from './BillMethod';
import Confrimation from './Confirm';
import MoreInfo from './MoreInfo';
import Order from './Order';
import PaymentMethod from './PaymentMethod';
import './style.scss';

function Checkout(props) {
    return (
        <>
            
        <div className="checkout">
            <div className="container checkout-container">
                    <form action="" className='bill'>
                        <BillInfo />
                        <BillMetod />
                        <PaymentMethod />
                        <MoreInfo />
                        <Confrimation />
                    </form>
                    <aside>
                        <Order />
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