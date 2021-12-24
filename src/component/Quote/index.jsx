import React from 'react';
import './style.scss'
function Quote(props) {
    return (
        <div className='quote '>
            <p className="quote__content">
            “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “
            </p>
            <p className="quote__author">
            Name and Surname
            </p>
            <div className="quote__avatar">
                <img src="https://znews-photo.zadn.vn/w660/Uploaded/bpivpawv/2020_02_13/fred_manchester_united_1581336443_31483.jpg" alt="" />
            </div>
        </div>
    );
}

export default Quote;