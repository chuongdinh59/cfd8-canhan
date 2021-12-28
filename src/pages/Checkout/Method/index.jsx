import React from 'react';
import './style.scss'
function Method({name , price, logo, group, register}) {
    // console.log(register);
    return (
        <label className="method" >
            <div className="method__branch">
                <input type="radio" name={group} {...register}/>
                <p className="method__name">{name}</p>
            </div>
            {
                price && 
                <div className="method__price">
                    <p className="method__number">
                    {price}
                    </p>
                    <p className="method__desc">
                    Additional price
                    </p>
                </div>
            }
            <div className="method__logo">
                <img src= {logo} alt="logo  " />
            </div>
        </label>
    );
}

export default Method;
