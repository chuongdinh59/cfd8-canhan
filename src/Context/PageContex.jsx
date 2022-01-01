import React, { useContext, useState } from "react"

const PageContext = React.createContext()



export const PageProvider = ({ children }) => {
    const [isOpenCart, setOpenCart] = useState(false)
    const openCart = () => {
        setOpenCart(true)
    }
    const closeCart = () =>{
        setOpenCart(false)
    }
    return (
        <PageContext.Provider value = {{openCart, closeCart, isOpenCart}}>
            {children}
        </PageContext.Provider>
    )
}



export const usePage = () => {
    return useContext(PageContext);
}