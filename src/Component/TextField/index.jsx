import React from 'react';

function TextField({ label, type, value, error, ...rest }) {
    return (
        <label>
            <div className="label" >{label}</div>
            <input type={type} value={value} {...rest} />
            <p className="error-text">{error}</p>
         </label>
    );
}

export default TextField;