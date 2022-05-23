import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Login from './Components/LoginComponent/LoginView';
import Signup from './Components/SignUpComponent/SignUpView';
import CardInfo from './Components/CardsComponent/CardInfoComponent';
import ShoppingCart from './Components/ShoppingCartComponent/ShoppingCart';
import { setData } from './Context/CartContext';
import Home from './Components/Home';
import AccountInfo from './Components/AccountComponents/AccountInfoComponent/AccountInfo';
import SearchBar from './Components/SearchBar';
import SearchResult from './Components/SearchResult';
const App = () => {
  
  window.onbeforeunload = (event) => {
    const e = event || window.event;
    e.preventDefault();
    if (e) {
      e.returnValue = "";
    }
    return "";
  };
  setData([]);
  return (
        <BrowserRouter>
        <Header/>
        <SearchBar/>
        <Routes>
          <Route path="/" element={ <Navigate to='/home' />} />
          <Route path="/home" element={ <Home /> } />
          <Route path="/cards/:game" element={<Cards/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element ={<Signup/>} />
          <Route path="/card/:cardId" element={<CardInfo/>} />
          <Route path="/cards/search/:search" element={<SearchResult/>} />
          <Route path="/shoppingCart" element={<ShoppingCart/>} />
          <Route path="/logout" element={ <Navigate to='/login' />} />
          <Route path="/account" element={<AccountInfo/>} />
        </Routes>
        </BrowserRouter>
  );
};
export default App;