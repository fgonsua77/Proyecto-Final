import './App.css';
import { useState} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Cards from './Components/CardsComponent/Cards';
import Login from './Components/LoginComponent/LoginView';
import Signup from './Components/SignUpComponent/SignUpView';
import CardInfo from './Components/CardsComponent/CardInfoComponent';
import ShoppingCart from './Components/ShoppingCartComponent/ShoppingCart';
import Home from './Components/Home';
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  window.onbeforeunload = (event) => {
    const e = event || window.event;
    e.preventDefault();
    if (e) {
      e.returnValue = "";
    }
    return "";
  };
  return (
        <BrowserRouter>
        <Header countCartItems={cartItems.length} />
        <Routes>
          <Route path="/" element={ <Navigate to='/home' />} />
          <Route path="/home" element={ <Home /> } />
          <Route path="/cards" element={<Cards/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element ={<Signup/>} />
          <Route path="/card/:cardId" element={<CardInfo/>} />
          <Route path="/shoppingCart" element={<ShoppingCart/>} />
          <Route
                path="/logout"
                exact
                component={() => (
                  <Login message="User Logged Out Successfully." />
                )}
          />
        </Routes>
        </BrowserRouter>
  );
};
export default App;