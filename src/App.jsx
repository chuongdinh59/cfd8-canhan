import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Homepage/";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CategoryPage from "./pages/Category";
import Checkout from "./pages/Checkout";
import CheckoutLayout from "./layout/CheckoutLayout";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/'  element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/category' element={<CategoryPage />}/>
        </Route>
        <Route path='/checkout' element={<CheckoutLayout />} >
            <Route index element={<Checkout />} />

        </Route>

        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
