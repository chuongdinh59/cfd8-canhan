import React from 'react';
import classnames from 'classnames'
import { Times } from '../Icon';
import './style.scss'
function Tag({ tagname = "Tag", icon = false, size = "small", bg = "bright", color }) {
    
    return (
        <div className={classnames('tag', { icon }, `size-${size}`, `bg-${bg}`)}>
            <p classnames = 'tag__name'>{tagname}</p>
            {icon && <span ><Times color = {color} /> </span>}
        </div>

    );
}

export default Tag;