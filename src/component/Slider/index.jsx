import React from 'react';
import Button from '../Button/Button';
import { Arrow } from '../Icon';
import Quote from '../Quote';
import './style.scss';


export default function Slider(props) {

    
    return (
        <section className='slider' >
            <div className="slider__heading">
                <h4 className="slider__title">
                Our customers says
                </h4>
                <Button content="Button" size='small' bgcolor='store' icon={<Arrow/>} type = 'icon-right' />
            </div>
            <div className="slider__main ">
                <Quote />
                <Quote />
                <Quote />
                <Quote />
                <Quote />
                
                
                
            </div>
           
        </section>
    );
}
