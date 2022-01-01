import React, { useState } from 'react';
import TabItem from './TabItem';

import './style.scss'
const content = [
    {
        type: 'PURCHASES',
        name: 'pencial',
        img: "http://cdn.shopify.com/s/files/1/1298/0361/products/classic_mechanical_pencial_grande.jpg?v=1510656836",
        price: 1.50
    },
    {
        type: 'WISHLIST',
        name: 'pen',
        img: 'https://cms.cloudinary.vpsvc.com//image/fetch/q_auto:eco,w_700,f_auto,dpr_auto/https://s3-eu-west-1.amazonaws.com/sitecore-media-bucket/prod%2Fen%2F%7B3D1BD3F1-6E86-40F6-9377-23044E5B9A42%7D',
        price: 1.50

    },
    {
        type: 'PURCHASES',
        name: 'table',
        img: 'https://rnb.scene7.com/is/image/roomandboard/698884_wood_W?scl=1',
        price: 4.50
    },
    {
        type: 'WISHLIST',
        name: 'computer',
        img: 'https://mac24h.vn/images/thumbnails/350/325/detailed/48/Macbook_Pro_2020_M1_29nn-l5.png?t=1629386906',
        price: 55.50

    }
]
function Tab(props) {
    const [chose, setChose] = useState("PURCHASES")


    const handleClick = (e) => {
        const type = e.currentTarget.innerHTML;
        e.currentTarget.parentNode.setAttribute('class', `tab-btn ${type}` )
        setChose(type)
    }
    return (
        <div className='tab'>
            
            <div className="tab-heading">
                    <h1>SHOP</h1>
            </div>
            <div className="tab-btn">
                <a href="#!" onClick={(e) => handleClick(e)}>PURCHASES</a>
                <a href="#!" onClick={(e) => handleClick(e)}>WISHLIST</a>
            </div>

            <ul className="tab-list">
                <TabItem content={content} tab={ chose }/>
            </ul>
        </div>
    );
}

export default Tab;