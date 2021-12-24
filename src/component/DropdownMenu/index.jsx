import React from 'react';
import DropdownAccount from '../DropdownAccount';
import './style.scss'
function DropdownMenu(props) {

    const titles = ["Bakery","Fruit and vegetables", "Meat and fish","Drinks","Kitchen","Special nutrition", "Baby", "Pharmacy"  ]

    return (
        <section className="menu">
            <div className="container">
                <ul className="menu__categories">
                    {
                        titles.map((title , index)=> {
                            return (
                                <DropdownAccount key={index} title={title}/>
                            )
                        })
                    }            
                </ul>
            </div>
        </section>
    );
}

export default DropdownMenu;