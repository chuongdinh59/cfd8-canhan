import React from 'react';
import Pagination from '../Pagination';
import Button from '../Button/Button'
import {Arrow} from '../Icon'
import Tag from '../Tag'
import './style.scss'
function More(props) {
    return (
        <div className='more'>
            <Pagination />
            <Button content={'Show more products'} bgcolor='bright' color='white' type='icon-right' icon={<Arrow  color='#fff'/>} />
            <div className="quantily">
                <Tag tagname='336' />
                <span>Products</span>
            </div>
        </div>
    );
}

export default More;