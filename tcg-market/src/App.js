import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Cards from './Components/CardsComponent/Cards';
import Login from './Components/LoginComponent/LoginView';
import Signup from './Components/SignUpComponent/SignUpView';
import CardInfo from './Components/CardsComponent/CardInfoComponent';
import ShoppingCart from './Components/ShoppingCartComponent/ShoppingCart';
import CartContextProvider from './Context/CartContext';
import Home from './Components/Home';
const App = () => {
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
        <CartContextProvider>
        <Header/>
        <Routes>
          <Route path="/" element={ <Navigate to='/home' />} />
          <Route path="/home" element={ <Home /> } />
          <Route path="/cards" element={<Cards/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element ={<Signup/>} />
          <Route path="/card/:cardId" element={<CardInfo/>} />
          <Route path="/shoppingCart" element={<ShoppingCart/>} />
          <Route path="/logout" element={ <Navigate to='/login' />} />
        </Routes>
        </CartContextProvider>
        </BrowserRouter>
  );
};
export default App;