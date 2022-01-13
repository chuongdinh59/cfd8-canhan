import React from 'react';
import Button from '../Button/Button';
import Tag from '../Tag';
import Rating from '@mui/material/Rating';
import './style.scss'
import { useDispatch } from 'react-redux';
import { Heart } from '../Icon';
function ProductItem({ description, name, src, realPrice, sellPrice, discountRate, rate , id }) {
    const dispatch = useDispatch();
    return (
        <div className={`product`} >
            <Tag tagname={`-${discountRate}%`} bg='bright' />
            <button className="product__wish" onClick={() => dispatch({type:'ADD_WISHLIST', payload: {id} })}>
                <Heart />
            </button>
            <div className="product__img">
                <img src={src} alt="" />
            </div>
            <div className="product__info">
                <div className="product__name">
                    <h5 className="product__title">{name}</h5>
                <p className="product__desc">{description} </p>
                </div>
                <div className="product__rate">
                    <Rating name="read-only" value={rate} readOnly size="small" precision={0.5} />
                </div>
                <div className="product__price">
                    <div className="price__number">
                        <p className="price__number--real">
                            {realPrice} VND
                        </p>
                        <p className="price__number--sell">
                            {sellPrice} VND
                        </p>
                    </div>
                    
                    <Button onClick = {() => dispatch({type: 'ADD_PRODUCT', payload : {id}})} content = 'Buy now' bgcolor='bright' size = "small" color = 'white'/>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;