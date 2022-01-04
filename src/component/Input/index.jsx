import React from 'react';
import { Arrow, Letter } from '../Icon';
import './style.scss'
function Input({label = '', placeholder = 'Placehoder', type = 'text' , position, checkbox = false ,error ,letter = false, arrow = false, register}) {
    
    return (
        <label className='input'>
            <h5 className="input__label">
                {label}
            </h5>
            <div className="input__main">
                {letter && position === 'icon-left' && <span>{<Letter />}</span>}
                {checkbox && <label className='input__checkbox'><input {...register} type="checkbox" /></label> }
                {checkbox && <input type={type} placeholder={placeholder} disabled={checkbox} /> }
                {!checkbox && <input type={type} placeholder={placeholder} disabled={checkbox} {...register}/>}
                {arrow &&
                    <div className="input__range">
                        <span>{<Arrow rotate='180deg'/>}</span>
                        <span>{<Arrow />}</span>
                    </div> }
                {letter && position === 'icon-right' && <span>{ <Letter />}</span> }
            </div>
            <p className="text-error">{error && error[register.name]}</p>
           
        </label>
    );
}

export default Input;

