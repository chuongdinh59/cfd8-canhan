import React, { useState } from 'react';
import { ArrowDown } from '../../icon/Icon';
function AccordionItem(props) {
    const { src,content,error, alert,id } = props
   
    const [isOpen, setOpen] = useState(false)
    const handleClick = (e) => {
        setOpen(!isOpen)
    }
    return (
        <div className="accordion-item"  id = {id} onClick={(e) => {handleClick(e)}}>
            <div className="accordion-title">
                <div className="accordion-content">
                    <div className="accordion-icon">
                        <img src={src} alt="" />
                    </div>
                    <div className="accordion-desc">
                        <h4 className="accordion-title">
                            {content}
                        </h4>
                        <p className="accordion-issue">
                        {error} <span>{alert}</span>
                        </p>
                    </div>
           </div>
            <a href="#!" className="accordion-btn" >
                 <ArrowDown width={30} height={30}/>
            </a>
           </div>

           
            
            <div className={
                `accordion-info ${isOpen === false    ? 'hide' : 'show'}`
            }>
                <p>Lorem ipsum dolor,   odit porro maiores pariatur. Voluptates nihil alias eligendi quas in optio tempora cumque nam quo. Non, assumenda!</p>
            </div>
        </div>
    );
}

export default AccordionItem;