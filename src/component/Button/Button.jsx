import React from 'react';
import './style.scss'
import classNames from 'classnames'
import { Loader } from '../Icon';
function Button({ content, loading , color = "default" , bgcolor = "default" , size = "medium", type = "default", round = false , icon = null, ...params }) {
    return (
        <button {...params} disabled={loading} className={classNames("button", `color-${color}`, `bgcolor-${bgcolor} `,  `size-${size}`, `type-${type}`, { round })} >
            {loading && <Loader />}
            
            {type === 'icon-left' && !loading && <span>{icon}</span>}
            <p>{content}</p>
            {type === 'icon-right' && icon }
        </button>
    );
}

export default Button;