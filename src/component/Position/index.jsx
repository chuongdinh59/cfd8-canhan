import React from 'react';
import './style.scss'
function Position({position}) {
    return (
        <section className='position'>
            <div className="container">
                <span className='position-back'>Homepage</span>
                <span className='position-slash'>/</span>
                <span className='position-now'>Checkout page</span>
            </div>
        </section>
    );
}

export default Position;