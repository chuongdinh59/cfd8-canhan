import React from 'react';
import Button from '../Button/Button';
import Tag from '../Tag';
import './style.scss'
function ProductItem({ description, name, src, realPrice, sellPrice, discountRate }) {
    
    return (
        <div className={`product`} >
            <Tag  tagname={`-${discountRate}%`} bg='bright'/>
            <div className="product__img">
                <img src={src} alt="" />
            </div>
            <div className="product__info">
                <div className="product__name">
                    <h5 className="product__title">{name}</h5>
                <p className="product__desc">{description} </p>
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
                    
                    <Button content = 'Buy now' bgcolor='bright' size = "small" color = 'white'/>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;