import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckoutLayout from "./layout/CheckoutLayout";
import MainLayout from "./layout/MainLayout";
import CategoryPage from "./pages/Category";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/Homepage/";
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
