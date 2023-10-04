
import './App.css';
import Information from './Components/Information';
import Navbar from './Components/Navbar'
//import Products from './Components/Products';
//import CheckoutPage from "./Components/CheckoutPage"
import ImageCarousel from './Components/carrucel';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageCarousel />
      <Information/>
      {/*<Products />*/}
      {/*<CheckoutPage/>*/}
    </div>
  );
}

export default App;
