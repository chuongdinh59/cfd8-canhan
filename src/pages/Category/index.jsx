import React from 'react';
import SideFilter from './SideFilter';
import ProductList from './ProductList'
import './style.scss'
function CategoryPage(props) {
    return (
        <div className="category">
            <div className='container category__container'>
                <section className="fillter">
                    <SideFilter />
                </section>
                <section className="products">
                    <ProductList />
                </section>
            </div>
        </div>
    );
}

export default CategoryPage;