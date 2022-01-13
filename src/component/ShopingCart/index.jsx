import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { Times } from '../Icon';
import OrderItem from '../OrderItem';
import './style.scss';
function ShopingCart({setIsOpen, cart}) {

    return (
        <div className="cart">
            <div className="cart__header">
                <h4 className="cart__title">Shopping cart</h4>
                <a href=" " className="cart__close" onClick={() => setIsOpen(false)}>
                    <span>Close</span>
                    <Times />
                </a>
            </div>
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
            <div className="cart__checkout">
                <div className="cart__total">
                    <span>Subtotal</span>
                    <span className='cart__price'>
                        {cart?.subTotal + ' VND'|| 0 + 'VND'}
                    </span>
                </div>
                <div className="cart__navigate">
                    <span>Continue shopping</span>
                    <Link to='/checkout'>
                        <Button content={'Go to Checkout'} bgcolor='bright' color='white' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ShopingCart;