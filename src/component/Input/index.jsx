import React from 'react';
import { Arrow, Letter } from '../Icon';
import './style.scss'
function Input({name = 'Text Label', placeholder = 'Placehoder', type = 'text', icon , position, checkbox = false , letter = false, arrow = false}) {
    return (
        <label className='input'>
            <h5 className="input__label">
                {name}
            </h5>
            <div className="input__main">
                {letter && position === 'icon-left' && <span>{<Letter />}</span>}
                {checkbox && <label className='input__checkbox'><input type="checkbox" /></label> }
                <input type={type} placeholder={placeholder} disabled = {checkbox} /> 
                {arrow &&
                    <div className="input__range">
                        <span>{<Arrow rotate='180deg'/>}</span>
                        <span>{<Arrow />}</span>
                    </div> }
                {letter && position === 'icon-right' && <span>{ <Letter />}</span> }
            </div>
            
           
        </label>
    );
}

export default Input;

