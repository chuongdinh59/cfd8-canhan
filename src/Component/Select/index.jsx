import React, { useState } from 'react';

function Select({ option, label, error, value, update ,...rest }) {

    const [state, setState] = useState('')
    const _value = value    
    value = state;


    
    return (
        <label >
            <div className="label">{label}</div>
            <select value={ _value } {...rest}  >
                <option value="" disabled  >Select your option</option>

                {
                    option.map((item, index) => <option value={item} key={index}>{item}</option>)
                }
            </select>
            <p className="error-text">{error}</p>
            {
                _value === 'Other' && <input type="text" value={state} onChange={(e) => setState(e.currentTarget.value)} />
            }
        </label>

    );
}

export default Select;