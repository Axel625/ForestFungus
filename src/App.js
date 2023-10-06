
import './App.css';
import Information from './Components/Information';
import Navbar from './Components/Navbar'
import Products from './Components/Products';
import CheckoutPage from "./Components/CheckoutPage"
import ImageCarousel from './Components/carrucel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
