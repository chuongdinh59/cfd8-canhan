import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Input from '../../../component/Input';
import { useForm } from '../../../hooks/useForm';
import BillHeading from '../BillHeading';
import OrderItem from '../../../component/OrderItem';
import './style.scss';
import { useSelector } from 'react-redux';
const Order = forwardRef((props, ref) => {
    const { cart } = useSelector(store => store.cart)
    const { register, form, validate } = useForm()
    useImperativeHandle(ref, () => {
        return {
            validate,
            form
        }
    }, [validate, form])
    const [notify, setNotify] = useState('')
    const isEmty = (e) => {
        const value = e.currentTarget.parentNode.querySelector('input').value
        if (value.trim() === '') {
            setNotify('Chưa nhập Voucher')
        }
        else setNotify('')
    }

    
    return (
        <div className='order'>
            <BillHeading title='Order Summary' desc='Price can change depending on shipping method and taxes of your state.' />
            {
                cart?.listItems.length > 0 ?
                <div className="cart__orders">      
                {
                        cart?.listItems?.map(item => {
                        return <OrderItem src={item.product.thumbnail_url}
                            key={item.product._id}
                            id={item.product._id} realPrice={item.product.real_price}
                            sellPrice={item.product.price} quantity={item.quantity}
                            name={item.product.name}
                        />
                    })
                }
                </div>
                : <div className="cart__empty">
                        <div className="emty__icon">
                            <img src="https://rtworkspace.com/wp-content/plugins/rtworkspace-ecommerce-wp-plugin/assets/img/empty-cart.png" alt="" />
                        </div>
                </div>
            }
            <div className="order__payment">
                <div className="order__bill">
                    <div className="order__cost">
                        <span className='order__subtotal'>Subtotal</span>
                        <span >73.98 USD</span>
                    </div>
                    <div className="order__cost">
                        <span className='order__tax'>Tax</span>
                        <span >17% 16.53 USD</span>
                    </div>
                    <div className="order__cost">
                        <span className='order__shipping'>Shipping</span>
                        <span >0 USD</span>
                    </div>
                </div>
            </div>

            <div className="order__voucher">
                {
                    <Input name='' placeholder='Apply promo code' register={register('voucher', {required:false} )} /> 
                }
                <button className='apply-voucher' onClick={isEmty} >Apply Now</button>
            </div>
            <p className="text-error">{ notify }</p>
            <div className="order__total">
                <div className="order__date">
                    <span className='title'>Total Order</span>
                    <p className='date'>Guaranteed delivery day:  June 12, 2020</p>
                </div>
                <span className="total">89.84 USD</span>
            </div>
        </div>
    );
})

export default Order;