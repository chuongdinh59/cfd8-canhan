import React from 'react';
import classnames from 'classnames'
import './style.scss'
function Pagination({indexActive = 1}) {
    return (
        <div className='paginate'>
            <span className='page'>Page:</span>
            {
                Array.from({ length: 5 }, (_, i) => i + 1).map(index =>
                    <span className={classnames('page-number' , { active: indexActive === index })}>{index}</span>
                )
            }
        </div>
    );
}

export default Pagination;