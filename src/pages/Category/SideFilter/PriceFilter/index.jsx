import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Input from '../../../../component/Input'
import Button from '../../../../component/Button/Button'
import './style.scss'
function valuetext(value) {
    return `${value}°VND`;
  }
function PriceFilter(props) {
    const [value, setValue] = useState([20, 75]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="price__filter filter">
        <h4 className="filter__name">
                Price
        </h4>
        <div className="filter__content">
        <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
                />
                <div className="filter__control">
                    <Input label='Min' placeholder={value[0]} disable = {true} />
                    <Input label='Max' placeholder={value[1]} disable = {true}/>
                </div>
                <div className="filter__btn">
                    <Button content={'Apply'} bgcolor='bright' color='white'/>
                    <Button content={'Reset'} color='gray' onClick={() => setValue([25,75]) }/>
                </div>
        </div>
    </div>
    );
}

export default PriceFilter;