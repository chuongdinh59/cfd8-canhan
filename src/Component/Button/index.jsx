import React from 'react';
import './style.scss'
import classNames from 'classnames'
import { Loader } from '../../icon/Icon';
function Button({ content, loading , color = "default" , bgcolor = "default" , size = "medium", type = "default", round = false , icon = null }) {
    return (
        <button disabled={loading} className={classNames("button", `color-${color}`, `bgcolor-${bgcolor} `,  `size-${size}`, `type-${type}`, { round })} >
            {loading && <Loader />}
            
            {type === 'icon-left' && !loading && <span>{icon}</span>}
            {content}
            {type === 'icon-right' && <span>{icon}</span>}
        </button>
    );
}

export default Button;