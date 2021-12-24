import React from 'react';
import Banner from './Banner';
import SideMenu from '../../../component/SideMenu';
import './style.scss'




function Categories(props) {

    // Ví dụ array

    const titles = [
        "Bakery", "Fruit and vegetables", "Meat and fish", "Drinks", "Kitchen"
    ]

    return (
        <section className="categories">
            <div className="container categories__details">
                <SideMenu name="Category menu" btn ="More categories " titles={titles}  />
                <div className="banners">
                    <Banner />
                    <Banner />
                </div>
            </div>
        </section>
    );
}

export default Categories;