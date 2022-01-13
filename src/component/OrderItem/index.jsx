import React from 'react';
import { useDispatch } from 'react-redux';
import { Compare, Heart, Times } from '../Icon';
import Rate from  '../Rate'
function OrderItem({ src, id, realPrice, sellPrice, rate, quantity, name }) {
    

    const dispatch = useDispatch()
    return (
        <div className='order__item'>
            <div className="order-represent">
                <div className="order__img">
                    <img src={src} alt="product" />
                </div>
                <div className="order__control">
                    <button className="order__operation">
                        <div className="order__icon">
                            <Heart />
                        </div>
                        <p className="order__name">
                             Wishlist
                        </p>
                    </button>
                    <button className="order__operation">
                        <div className="order__icon">
                            <Compare />
                        </div>
                        <p className="order__name">
                        Compare
                        </p>
                    </button>
                    <button className="order__operation" onClick={() => dispatch({type: 'REMOVE_CART', payload: {id}})}>
                        <div className="order__icon">
                            <Times />
                        </div>
                        <p className="order__name">
                            Remove
                        </p>
                    </button>
                </div>
            </div>
            <div className="order__desc">
                <h5 className="order__title">
                    {name}
                </h5>
                <div className="order__info">
                    <span className="order__field">
                        Farm:
                    </span>
                    <span>Tharamis Farm</span>
                </div>
                <div className="order__info">
                    <span className="order__field">
                    Freshness:
                    </span>
                    <span>1 day old</span>
                </div>
                <div className="order__star">
                    <Rate index={4} />
                </div>
                <div className="order__price">
                    <div className="number">
                        <span className="real__price">
                          {sellPrice}
                        </span>
                        <span className='sell__price'>
                        {realPrice}
                        </span>
                    </div>
                    <div className="quantity">
                        <button className="decrease" disabled ={quantity === 1} onClick={
                            () => dispatch({
                                type: 'DECREMENT',
                                payload: {
                                    product_id: id,
                                    quantity: quantity - 1
                                }
                            })}
                        >
                            -
                        </button>
                        <span>{ quantity }</span>
                        <button className="increase" onClick={
                            () => dispatch({
                                type: 'INCREMENT',
                                payload: {
                                    product_id: id,
                                    quantity: quantity + 1
                                }
                                
                            })} >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;