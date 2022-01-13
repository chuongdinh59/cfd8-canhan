import React from 'react';
import Button from '../Button/Button';
import { Arrow } from '../Icon';
import './style.scss';
function SideMenu({name, btn , titles}) {
    return (
                <div className="list list__title">
                    <h5 className="list__name">
                        {name}
                    </h5>
                    <ul className="list__nav">
                       
                    {
                        titles.map( (title, index) => {
                            return (
                                <li key={index} className="list__item">
                                <a href=" " className="list__link">
                                {title}
                                </a>
                            </li>
                            )
                        })
                    }
                       
                    </ul>
                <Button bgcolor='store' content={btn} type = "icon-right" icon={<Arrow/>}/>
                </div>
        
       
    );
}

export default SideMenu;