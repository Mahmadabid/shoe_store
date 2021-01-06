import { useState } from "react";
import './App.css';
import Header from "./Components/Header/Header";
import { ThemeButton, GlobalProvider } from "./Context/GlobalState";
import { Home } from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from "./Components/NotFound";
import { Product } from "./Components/Product";
import { ProductHome } from "./Components/ProductHome";
import { ProductDetails } from "./Components/ProductDetails";
import { Cart } from "./Components/Cart";

function App() {

  const islit = useState(true);

  return (
    <ThemeButton.Provider value={islit}>
      <GlobalProvider>
        <div className={`${islit[0]?'':'darks'} container`} >
          <Header />
            <div>
              <Routes>
                <Route path="*" element={<NotFound/>} />
                <Route path="/" element={<Home />} />
                <Route path="products" element={<Product/>}>
                <Route path="/" element={<ProductHome />} />
                  <Route path=":productId" element={<ProductDetails />} />
                </Route>
                <Route path="cart" element={<Cart />} />
              </Routes>
            </div>
        </div>
      </GlobalProvider>
    </ThemeButton.Provider>
  );
}

export default App;
