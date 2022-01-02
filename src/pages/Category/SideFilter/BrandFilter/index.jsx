import React from 'react';
function BrandFillers(props) {
    return (
        <div className="brand__filter filter">
            <h4 className="filter__name">
            Brands
            </h4>
            <div className="filter__content">
                <label className="filter__brand">
                    <input type="checkbox" />
                    <span>Filtre by brand item</span>
                </label>
                <label className="filter__brand">
                    <input type="checkbox" />
                    <span>Filtre by brand item</span>
                </label>
                <label className="filter__brand">
                    <input type="checkbox" />
                    <span>Filtre by brand item</span>
                </label>
                <label className="filter__brand">
                    <input type="checkbox" />
                    <span>Filtre by brand item</span>
                </label>
                <label className="filter__brand">
                    <input type="checkbox" />
                    <span>Filtre by brand item</span>
                </label>
            </div>
        </div>
    );
}

export default BrandFillers;