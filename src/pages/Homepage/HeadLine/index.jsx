import React from 'react';
import Button from '../../../component/Button/Button';
import { Arrow } from '../../../component/Icon';
import ProductItem from '../../../component/Product';
import './style.scss';
function HeadLine(props) {
    return (
        <section className='headline'>
            <div className="container headline__container">
                <div className="headline__heading">
                    <h4 className="headline__title">
                        Section Headline
                    </h4>
                    <Button content={"Button"} size='small'type='icon-right'icon={<Arrow/> } bgcolor='store'/>

                </div>
                <div className="headline__list">
                    <ProductItem description="Space for a small product description" number={4} />
                    <ProductItem description = "Space for a small product description Space for a small product descriptio"number={4}/>
                    <ProductItem description = "Space for a small product description Space for a small product descriptio"number={4}/>
                    <ProductItem description="Space for a small product description"number={4}/>
                </div>
            </div>
        </section>
    );
}

export default HeadLine;