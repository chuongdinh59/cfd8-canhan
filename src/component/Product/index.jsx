import React from 'react';
import Button from '../Button/Button';
import Tag from '../Tag';
import './style.scss'
function ProductItem({description, number}) {
    return (
        <div className={`product flex-${number}`} >
            <Tag  tagname={"-32%"} bg='bright'/>
            <div className="product__img">
                <img src="https://genk.mediacdn.vn/139269124445442048/2021/3/9/photo-1-16152785247611799272501.png" alt="" />
            </div>
            <div className="product__info">
                <div className="product__name">
                <h5 className="product__title">Product Tille</h5>
                <p className="product__desc">{description} </p>
                </div>
                <div className="product__price">
                    <div className="price__number">
                        <p className="price__number--real">
                            1.48 USD
                        </p>
                        <p className="price__number--sell">
                            48.56
                        </p>
                    </div>
                    
                    <Button content = 'Buy now' bgcolor='bright' size = "small" color = 'white'/>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;