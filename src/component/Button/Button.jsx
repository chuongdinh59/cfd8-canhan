import React from 'react';
import './style.scss'
import classNames from 'classnames'
function Button({ content, color = "default" , bgcolor = "default" , size = "medium", type = "default", round = false , icon = null, submit = null}) {
    return (
        <button onClick={submit}  className={classNames("button", `color-${color}`, `bgcolor-${bgcolor} `,  `size-${size}`, `type-${type}`, { round })} >
            {type === 'icon-left' && icon }
            {content}
            {type === 'icon-right' && icon}
        </button>
    );
}

export default Button;