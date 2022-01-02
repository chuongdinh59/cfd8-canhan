import React from 'react';
import BrandFillers from './BrandFilter';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';
import './style.scss'
function SideFilter(props) {
    return (
        <div >
            <CategoryFilter />
            <BrandFillers />
            <RatingFilter />
            <PriceFilter />
        </div>
    );
}

export default SideFilter;