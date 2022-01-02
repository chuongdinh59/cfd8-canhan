import React from 'react';
import Product from '../../../component/Product'
function ProductList(props) {
    return (
        <div className='product__list'>
                <Product description={'Space for a small product description'}/>
                <Product description={'Space for a small product description ps5 Space for a small product description'} />
                <Product description={'Space for a small product description'}/>
        </div>
    );
}

export default ProductList;