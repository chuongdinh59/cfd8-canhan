import React from 'react';
import { Arrow, Search } from '../Icon';


function HeaderSearch(props) {
    return (
        <div className="header__search">
        <a href=" " className="header__category-btn">
            All categories  <Arrow />
        </a>
        <input type="text" className='search__line' placeholder='Search Products, categories' />
        <a href=" " className="header__search-btn">
            <Search  color="#6A983C"/>
        </a>
        </div>
    );
}

export default HeaderSearch;