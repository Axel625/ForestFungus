
import './App.css';
//import Information from './Components/Information';
import Navbar from './Components/Navbar'
//import Products from './Components/Products';
import CheckoutPage from "./Components/CheckoutPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<Information/>*/}
      {/*<Products />*/}
      <CheckoutPage/>
    </div>
  );
}

export default App;
