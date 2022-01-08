import React from 'react';
import Button from '../Button/Button';
import { Arrow } from '../Icon';
import Quote from '../Quote';
import Flickity from 'react-flickity-component'
import './style.scss';


export default function Slider(props) {
    const FlickityOptions = {
        initialIndex: 2,
        groupCells: 0,
        arrowShape: { 
            x0: 10,
            x1: 60, y1: 50,
            x2: 70, y2: 40,
            x3: 30
          }
    }
    
    return (
        <section className='slider' >
            <div className="slider__heading">
                <h4 className="slider__title">
                Our customers says
                </h4>
                <Button content="Button" size='small' bgcolor='store' icon={<Arrow/>} type = 'icon-right' />
            </div>
            <div className="slider__main ">
                <Flickity
                    className={'carousel'}
                    options={FlickityOptions}
                    data-flickity
                >
                    <Quote />
                    <Quote />
                    <Quote />
                    <Quote />
                    <Quote />
                    <Quote />
                    <Quote />
                    <Quote />
                    <Quote />
                    <Quote />
                    
                </Flickity>
            </div>
           
        </section>
    );
}
