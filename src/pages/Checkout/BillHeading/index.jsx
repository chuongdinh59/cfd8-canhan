import React from 'react';
import './style.scss'
function BillHeading({title = 'Billing info' , step , desc}) {
    return (
        <div className='bill__heading'>
            <div className="bill__heading-desc">
                <p className="bill__heading-title">
                    {title}
                </p>
                <p className="bill__heading-alert">{desc}</p>
            </div>
           {step &&  <p className="bill__heading-step">Step { step } of 5</p>}
        </div>
    );
}

export default BillHeading;