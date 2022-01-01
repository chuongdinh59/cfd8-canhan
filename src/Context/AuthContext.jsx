import React, { useContext, useState } from "react"

const AuthContext = React.createContext({})



let init = JSON.parse(localStorage.getItem('user'))
try {
    init = JSON.parse(localStorage.getItem('user'))
} catch (error) {
    init = false;
    
}
export const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(!!init)
  
    const [user, setUser] = useState(init)  

    const handleLogin = () => {
        const user = {
          
                name: 'Dang Pham Dinh Chuong',
                email: 'chuongdinh2202@gmail.com'
        }
        setLogin(true);
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }
    const handleLogout = () => {
        setLogin(false);
        setUser({})
        localStorage.removeItem('user')
    } 
  console.log(login);
    return (<AuthContext.Provider value={{handleLogin,handleLogout,login, user }}>
        {children}
    </AuthContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(AuthContext)
} 

