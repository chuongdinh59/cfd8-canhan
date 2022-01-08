import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Button from '../Button/Button'
function Test(props) {
    const { cart } = useSelector(state => state.cart)
    console.log(cart);
    const dispatch = useDispatch()
    return (
        <div>
            {
                cart?.listItems?.map((item, index) => {
                    return (
                        <div key={index}>
                            <Button content={'+'} onClick={() => dispatch({
                                type: 'INCREMENT',
                                payload: {
                                    product_id: item.product._id,
                                    quantity: cart?.totalQuantity + 1
                                }
                            })} />
                            <Button content={'-'} onClick={() => dispatch({
                                type: 'DECREMENT',
                                payload: {
                                    product_id: item.product._id,
                                    quantity: cart?.totalQuantity - 1
                                }
                            })} />
                            <div>{ item.product.name }</div>
                        </div>
                    )
                } )
            }
            
            {
                <div> quantity: { cart?.totalQuantity }</div> 
            }
           
        </div>
    );
}

export default Test;