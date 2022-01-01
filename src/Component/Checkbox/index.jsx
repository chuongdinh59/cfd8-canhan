import React from 'react';

function Checkbox({ content = ' ', label = '', error, value, ...rest }) {
    return (
        <label>
            <div className='label'>{label}</div>
            <input className='checkbox' type="checkbox" defaultChecked= {value} {...rest}/> {content}
            <p className="error-text">{error}</p>
        </label>
    );
}

export default Checkbox;