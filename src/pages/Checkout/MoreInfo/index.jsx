import React from 'react';
import BillHeading from '../BillHeading';
import './style.scss'
function MoreInfo(props) {
    return (
        <div className='more__info form'>
            <BillHeading title='Additional informations' desc='Need something else? We will make it for you!' step={4}/>
            <div className="form__more">
                <p className="form__title">
                    Order notes
                </p>
                <textarea className='form__text' placeholder='Need a specific delivery day? Sending a gitf? Let’s say ...'></textarea>
            </div>
        </div>
    );
}

export default MoreInfo;