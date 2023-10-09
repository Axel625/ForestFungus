
import './App.css';
import Information from './Components/Information';
import Navbar from './Components/Navbar'
import Products from './Components/Products';
import CheckoutPage from "./Components/CheckoutPage"
import ImageCarousel from './Components/carrucel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Components/signin';
import SignUp from './Components/Signup';
import Checkout from './Components/CheckoutForm/Checkout';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={ImageCarousel} />
          <Route path="/Checkout-page" Component={CheckoutPage}>
          </Route>
          <Route path="/Productos" Component={Products}>
          </Route>
          <Route path="/Inicio_de_Sesion" Component={SignIn}>
          </Route>
          <Route path="/Registro" Component={SignUp}>
          </Route>
          <Route path="/Verificacion" Component={Checkout}>
          </Route>
        </Routes>
        <Routes>
          <Route path="/" Component={Information}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
