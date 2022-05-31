import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
import AccountInfo from './Components/AccountComponents/AccountInfoComponent/AccountInfo';
import Favorites from './Components/Favorites/Favorites';
import SearchResult from './Components/SearchResult';
import Footer from './Components/Footer';
import Purchases from './Components/Purchases/Purchases';
import PurchaseInfo from './Components/Purchases/PurchasesComponent/PurchaseInfo/PurchaseInfo';
import Sales from './Components/Sales/Sales';

const App = () => {
 
  const [cartItems, setCartItems] = useState([]);
  const [sales, setSales] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/sale/ventasSinComprar')
      .then(response => response.json())
      .then(sales => setSales(sales))
  }, []);
  console.log("Estas son las ventas sin comprar para probar: ", sales);
  const userId = localStorage.getItem('id');
  const onAdd = (product) => {
    console.log(product);
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
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/card/:cardId" element={<CardInfo onAdd={onAdd} ventas={sales}  />} />
        <Route path="/cards/" element={<Cards />} />
        <Route path="/cards/search/:search" element={<SearchResult />} />
        <Route path="/expansions/" element={<Expansions />} />
        <Route path="/expansions/:expansionId" element={<ExpansionInfo />} />
        <Route path="/games/" element={<Games />} />
        <Route path="/games/:gameId" element={<GameInfo />}/>
        <Route path="/shoppingCart" element={<ShoppingCart cartItems={cartItems}
          onRemove={onRemove} />} />
        <Route path="/logout" element={<Navigate to='/login' />} />
        <Route path="/account/:user" element={<AccountInfo />} />
        <Route path="/favorites/:user" element={<Favorites />} />
        <Route path="/purchases/:user" element={<Purchases userId={userId} />} />
        <Route path="/purchases/:user/purchaseId=:purchaseId" element={<PurchaseInfo />} />
        <Route path="/sales/:user" element={<Sales userId={userId} />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>);
};
export default App;