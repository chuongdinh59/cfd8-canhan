// import {
//   BrowserRouter, Link, Route, Routes
// } from "react-router-dom";
// import { AuthProvider } from "./Context/AuthContext";
// import { PageProvider } from "./Context/PageContex";
// import AuthenLayout from "./Layout/AuthenLayout";
// import MainLayout from "./Layout/MainLayout";
// import ProfileLayOut from "./Layout/ProfileLayOut";
// import About from './pages/About';
// import Address from "./pages/Address";
// import AddressDetail from "./pages/Address/AddressDetail";
// import Forgot from "./pages/Authen/Forgot";
// import Login from "./pages/Authen/Login";
// import MyProfile from "./pages/Authen/MyProfile";
// import Register from "./pages/Authen/Register";
// import Reset from "./pages/Authen/Reset";
// import CheckOut from './pages/Checkout';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import NotFoud from './pages/NotFound';
// import Order from "./pages/Order";
// import OrderDetail from "./pages/Order/OrderDeTails";
// import PayMent from "./pages/Payment";
// import PaymentDetails from "./pages/Payment/PaymentDetail";
// import ViewCart from './pages/ViewCart';
import { Provider } from 'react-redux'
import store from "./store";
import TodoList from "./Component/Todo";

function App() {
  
  return (
    <Provider store={store}>
    {/* <AuthProvider>
    <PageProvider> */}
      {/* <BrowserRouter>
        
    <ul>
        <li>
          <Link to = '/' >Home</Link>
        </li>
        <li>
          <Link to = '/about' >About</Link>
        </li>
        <li>
          <Link to = '/contact' >Contact</Link>
        </li> 
        <li>
          <Link to = '/viewcart' >View Cart</Link>
        </li> 
        <li>
          <Link to = '/checkout' >Checkout</Link>
        </li> 
        <li>
          <Link to = '/profile' >Profile</Link>
        </li> 
        <li>
          <Link to = '/authen'>Authen</Link>
        </li>
      </ul>
    <main id="main-content">
      <Routes>
        <Route path='/' element={<MainLayout />}> 
          <Route index  element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/viewcart' element={<ViewCart />} ></Route>
          <Route path='/checkout' element={<CheckOut />} />
            
            <Route path="/profile" element={<ProfileLayOut /> }  >
              <Route index element={<MyProfile />} />
              <Route path="address" element={<Address />}/>
              <Route path="address/:id" element={<AddressDetail />}/>
              <Route path="payment" element={ <PayMent />}/>
              <Route path="payment/:method" element={ <PaymentDetails />}/>
              <Route path="order" element={<Order />} />
              <Route path="order/:id" element={ <OrderDetail />}/>
                </Route>
                
            <Route path='/authen' element = {<AuthenLayout/>}>
            <Route path = 'login' element={<Login  />} />
            <Route path='reset' element={<Reset />} />
            <Route path='forgot' element={<Forgot />}  />
            <Route path='register' element={<Register  /> } />
            </Route>
            
        </Route>
          

          <Route path='*' element={<NotFoud />}></Route>
        
         
      </Routes>
    </main>
    </BrowserRouter> */}
    {/* </PageProvider>
    </AuthProvider> */}
      
      <TodoList />
    </Provider>

    
  );
}

export default App;