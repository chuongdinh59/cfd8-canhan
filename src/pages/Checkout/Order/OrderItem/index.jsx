import React from 'react';
import { Compare, Heart, Times } from '../../../../component/Icon';
import Rate from '../../../../component/Rate';
function OrderItem() {
    return (
        <div className='order__item'>
            <div className="order-represent">
                <div className="order__img">
                    <img src="https://genk.mediacdn.vn/139269124445442048/2021/3/9/photo-1-16152785247611799272501.png" alt="product" />
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
                    <button className="order__operation">
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
                    Product title
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
                        <span className='sell__price'>
                        36.99 USD
                        </span>
                        <span className="real__price">
                            48.56 USD
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;