import React from 'react';
import './style.scss'
function Select({label = '' , register, error}) {
    return (
        <label className='select'>
            <h5 className="select__label">{ label}</h5>
            <div className="select__main">
                <select name=" " className='select__options' {...register} >
                    <option value="TPHCM">TPHCM</option>
                    <option value="HANOI">Hà nội</option>
                    <option value="HUE">Huế</option>
                </select>     
            </div>
            <p className="text-error">{error && error['state']}</p>
        </label>
    );
}

export default Select;