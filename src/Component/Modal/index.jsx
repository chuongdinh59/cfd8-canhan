import React from 'react';
import reactDom  from 'react-dom';
function Modal({children}) {
    return (  
        reactDom.createPortal(
            children ,
            document.body
        )
      );
}

export default Modal;