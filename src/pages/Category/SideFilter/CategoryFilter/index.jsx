import React from 'react';
import Tag from '../../../../component/Tag';
function CategoryFilter(props) {
    return (
        <div className="category__filter filter">
            <h4 className="filter__name">
                Categories
            </h4>
            <div className="filter__content">
                <div className="filter__category">
                    <span>Category name</span>
                    <Tag tagname='320'/>
                </div>
                <div className="filter__category">
                    <span>Category name</span>
                    <Tag tagname='112'/>
                </div>
                <div className="filter__category">
                    <span>Category name</span>
                    <Tag tagname='32'/>
                </div>
                <div className="filter__category">
                    <span>Category name</span>
                    <Tag tagname='48'/>
                </div>
            </div>
        </div>
    );
}

export default CategoryFilter;