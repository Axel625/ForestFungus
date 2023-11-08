import './App.css';
import Information from './Components/Information';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import CheckoutPage from "./Components/CheckoutPage";
import ImageCarousel from './Components/carrucel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Components/signin';
import SignUp from './Components/Signup';
import Checkout from './Components/CheckoutForm/Checkout';
import ChatBot from './Components/Chatbot';
import Equipo from './Components/Equipo';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="ComponentContainer">
          <Routes>
            <Route path="/" Component={ImageCarousel} />
            <Route path="/Checkout-page" Component={CheckoutPage} />
            <Route path="/Productos" Component={Products} />
            <Route path="/Inicio_de_Sesion" Component={SignIn} />
            <Route path="/Registro" Component={SignUp} />
            <Route path="/Verificacion" Component={Checkout} />
            <Route path="/IA" Component={ChatBot} />
            <Route path="/miebros_del_equipo" Component={Equipo} />
          </Routes>
        </div>
        <div className="InformationContainer">
          <Routes>
            <Route path="/" Component={Information} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
