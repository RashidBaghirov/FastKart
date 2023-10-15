import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Home from './pages/Home';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import DetailPage from "./pages/DetailPage";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shop' element={<Shop />} />
            <Route path="/shop/detail/:itemId" element={<DetailPage />} />
            <Route path='/shopcart' element={<Cart />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
