import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./Shop";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { ShopContextProvider } from "./ShopContextProvider";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
