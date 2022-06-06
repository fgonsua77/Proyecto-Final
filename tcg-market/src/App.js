import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CartContext from './Context/CartContext';
import Header from './Components/Header';
import Cards from './Components/Cards';
import CardInfo from './Components/CardsComponent/CardInfoComponent';
import Expansions from './Components/Expansions/Expansions';
import ExpansionInfo from './Components/Expansions/ExpansionsComponents/ExpansionInfo';
import Games from './Components/Games/Games';
import GameInfo from './Components/Games/GamesComponents/GameInfo/GameInfo';
import Login from './Components/LoginComponent/LoginView';
import Signup from './Components/SignUpComponent/SignUpView';
import ShoppingCart from './Components/ShoppingCartComponent/ShoppingCart';
import Home from './Components/Home';
import Account from './Components/Account/Account';
import AccountAddressInfo from './Components/AccountComponents/AccountAddress/AccountAddressInfo/AccountAddressInfo';
import AccountAddressCreate from './Components/AccountComponents/AccountAddress/AccountAddressCreate/AccountAddressCreate';
import Favorites from './Components/Favorites/Favorites';
import SearchResult from './Components/SearchResult';
import Footer from './Components/Footer';
import Purchases from './Components/Purchases/Purchases';
import PurchaseInfo from './Components/Purchases/PurchasesComponent/PurchaseInfo/PurchaseInfo';
import PurchaseGateway from './Components/PurchaseGateway/PurchaseGateway';
import Sales from './Components/Sales/Sales';
import SalesCreate from './Components/Sales/SalesComponents/SalesCreate/SalesCreate';
import Seller from './Components/Seller/Seller';
import SellerInfo from './Components/Seller/SellerComponents/SellerInfo/SellerInfo';


const App = () => {

  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({});
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    console.log(exist);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <BrowserRouter>
      <header>
        <Header username={user} cartLength={cartItems.length} />
      </header>
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home username={user} />} />
        <Route path="/login" element={<Login usuario={user} setUsuario={setUser}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/card/:cardId" element={<CardInfo onAdd={onAdd} username={user} cartItems={cartItems} />} />
        <Route path="/cards/" element={<Cards />} />
        <Route path="/cards/search/:search" element={<SearchResult />} />
        <Route path="/expansions/" element={<Expansions />} />
        <Route path="/expansions/:expansionId" element={<ExpansionInfo />} />
        <Route path="/games/" element={<Games />} />
        <Route path="/games/:gameId" element={<GameInfo />} />
        <Route path="/shoppingCart" element={<ShoppingCart cartItems={cartItems}
          onRemove={onRemove} clearStorage={CartContext.clearStorage} />} />
        <Route path="/logout" element={<Navigate to='/login' />} />
        <Route path="/account/:user" element={<Account username={user} />} />
        <Route path="/account/:user/address=:addressid" element={<AccountAddressInfo username={user} />} />
        <Route path="/account/:user/:userId/createAddress" element={<AccountAddressCreate username={user} />} />
        <Route path="/favorites/:user" element={<Favorites username={user} />} />
        <Route path="/purchases/:user" element={<Purchases username={user} />} />
        <Route path="/purchases/:user/purchaseId=:purchaseId" element={<PurchaseInfo username={user} />} />
        <Route path="/purchases/:user/gateway" element={<PurchaseGateway cartItems={cartItems} username={user} />} />
        <Route path="/sales/:username" element={<Sales />} />
        <Route path="/sales/:username/:id/add" element={<SalesCreate user={user} />} />
        <Route path="/sellers" element={<Seller username={user}/>} />
        <Route path="/sellers/:username" element={<SellerInfo username={user}/>} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>);
};
export default App;