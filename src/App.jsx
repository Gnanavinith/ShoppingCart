import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { useState } from 'react';

function App() {
  // Initialize cart as an empty array
  const [cart, setCart] = useState([]);

  return (
    <>
      <div>
        <BrowserRouter>
          <Header cart={cart} />
          <div className="Container">
            <Routes>
              <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
              <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
