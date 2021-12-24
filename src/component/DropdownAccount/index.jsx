import React from 'react';
import { Arrow } from '../Icon';
function DropdownAccount({title}) {
    return (
        <li className="menu__type">
            <p className="menu__title">
                {title}
                <Arrow color='#6A983C'/>
            </p>
        </li>
    );
}

export default DropdownAccount;