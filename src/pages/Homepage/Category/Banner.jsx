import React from 'react';
import Button from '../../../component/Button/Button';
import { Arrow } from '../../../component/Icon';

function Banner(props) {
    return (
        <div className='banner'>
            <div className="banner__desc">
                <p className="banner__sub">
                    Banner subfocus
                </p>
                <h4 className="banner__heading">
                    Space for heading
                </h4>
                <Button content={"Space for heading"} bgcolor='default' size='medium' type = 'icon-right' icon={ <Arrow />}/>
           </div>

        </div>
    );
}

export default Banner;