import React, { useRef } from 'react';
import { Breadcrumbs, BreadcrumbsItem } from '../../component/Breadcrumbs';
import Button from '../../component/Button/Button';
import BillInfo from './BillInfo';
import BillMethod from './BillMethod';
import Confrimation from './Confirm';
import MoreInfo from './MoreInfo';
import Order from './Order';
import PaymentMethod from './PaymentMethod';
import './style.scss';

function Checkout(props) {
    const billInfoRef = useRef()
    const billMethodRef = useRef()
    const paymentMethodRef = useRef()
    const moreInfoRef = useRef()
    const confirmRef = useRef()
    const orderRef = useRef()
    
    const submit = () => {
        const errorObject = {
            ...billInfoRef.current?.validate(),
            ...billMethodRef.current?.validate(),
            ...paymentMethodRef.current?.validate(),
            ...moreInfoRef.current?.validate(),
            ...confirmRef.current?.validate(),
            ...orderRef.current?.validate(),
            
        }
        if (Object.keys(errorObject).length === 0) {
            const formData = {
                ...billInfoRef.current?.form,
                ...billMethodRef.current?.form,
                ...paymentMethodRef.current?.form,
                ...moreInfoRef.current?.form,
                ...confirmRef.current?.form,
                ...orderRef.current?.form,
            }
            // const { shippingMethod, paymentMethod, name,
            //     phone, email, address,
            //     province, district, note
            // } = formData;
            // const formatData = {

            // }
            
            
        }
    }
    return (
        <>
            <div className="checkout">
                <div className="container checkout-header-second">
                <Breadcrumbs>
                            <BreadcrumbsItem>Homepage</BreadcrumbsItem>
                            <BreadcrumbsItem>Checkout page</BreadcrumbsItem>
                </Breadcrumbs>
                </div>
                <div className="container checkout-container">
                    
                    <div>
                       
                        <BillInfo  ref={billInfoRef}/>
                        <BillMethod  ref={billMethodRef}/>
                        <PaymentMethod  ref={paymentMethodRef}/>
                        <MoreInfo ref={moreInfoRef}/>
                        <Confrimation ref={confirmRef} />  
                        <div className="form__policy">
                            <img src="img/safe.png" alt="safe" />
                            <h3 className="commit">All your data are safe</h3>
                            <p className="policy">
                                We are using the most advanced security to provide you the best experience ever.
                            </p>
                        </div>
                        <Button onClick={submit}  content='Complete order' size='large' bgcolor='bright' color='white' />
                    </div>
                    <aside>
                        <Order ref={orderRef} />
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
