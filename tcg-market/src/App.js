import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Cards from './Components/CardsComponent/Cards';
import Login from './Components/LoginComponent/LoginView';
import Signup from './Components/SignUpComponent/SignUpView';
const App = () => {
  return (
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Navigate to='/home' />} />
          <Route path="/cards" element={<Cards/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element ={<Signup/>} />
        </Routes>
        </BrowserRouter>
  );
};
export default App;