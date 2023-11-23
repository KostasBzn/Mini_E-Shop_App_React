import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProductsProvider from "./context/ProductsContext";

import HomePage from "./pages/HomePage";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <ProductsProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </HashRouter>
      </ProductsProvider>
    </>
  );
}

export default App;
