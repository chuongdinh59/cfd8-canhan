import React from 'react';

function Product({src, name, status = "in stock", price}) {
    return (
        <div className="product">
                <div className="product-content">
                <div className="product-img">
                    <img src={src} alt="" />
                </div>
                <div className="product-info">
                    <h4 className="product-name">
                        {name}
                    </h4>
                    <p className="product-status">
                        {status}
                    </p>
                </div>
               </div>
                <div className="product-price">
                    <span>{price}</span>
                </div>
            </div>
    );
}

export default Product;