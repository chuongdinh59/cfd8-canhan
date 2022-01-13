import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Buy } from '../Icon';
import ShopingCart from '../ShopingCart';
function HeaderCart(props) {
    const { cart } = useSelector(store => store.cart)
    const { login } = useSelector(store => store.auth)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const handleOpen = (e) => {
        e.preventDefault();
        if (login) {
            setIsOpen(!isOpen)  
        }
        else {
            navigate('/login')
        }
    }
    return (
        <>
        <a href="/"className="header__cart" onClick={handleOpen} >
            <Buy />
                <span className="bill">
                {cart?.totalQuantity || 0} 
            </span>
        </a>
            {
                isOpen && <div className="header__shopping">
                    <ShopingCart setIsOpen={setIsOpen} cart={cart}/>
                </div>
            }
        </>
    );
}

export default HeaderCart;  