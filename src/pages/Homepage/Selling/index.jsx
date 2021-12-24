import React from 'react';
import ProductItem from '../../../component/Product';
import SideMenu from '../../../component/SideMenu';
import './style.scss'
function Selling({name, btn, titles}) {


    
    return (
        <section className="sell">
            <div className="container sell__details">
                <SideMenu name={name} btn={btn} titles={titles} />
                <div className="sell__list">
                    <ProductItem description="Space for a small product description" number={3} />
                    <ProductItem description = "Space for a small product description Space for a small product descriptio"number={3}/>
                    <ProductItem description="Space for a small product description"number={3}/>
                </div>
            </div>
        </section>
    );
}

export default Selling;