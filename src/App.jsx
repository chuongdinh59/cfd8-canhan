import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './component/Test';
import CheckoutLayout from "./layout/CheckoutLayout";
import MainLayout from "./layout/MainLayout";
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import CategoryPage from "./pages/Category";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/Homepage/";
import store from './store';
function App() {
  
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path = '/'  element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/category' element={<CategoryPage />}/>
        </Route>
        <Route path='/checkout' element={<CheckoutLayout />} >
            <Route index element={<Checkout />} />
        </Route>
        <Route path='/login' element={<Login />} />
      <Route  path = '/register' element = {<Register />} />
      <Route  path = '/test' element = {<Test />} />
    
      </Routes>
    </BrowserRouter>

    </Provider>
  );
}
export default App;


