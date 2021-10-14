import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Products from './Components/Products'
import ViewCart from './Components/ViewCart'
import Checkout from './Components/Checkout'
import Header from './Components/Header'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="Nav">
            <Route path='/:page' component={Header} />
            <Route exact path='/' component={Header} />
          </nav>
        </header>

        <Route path="/products" component={Products} />
        <Route exact path="/cart" component={ViewCart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/" component={Home} />

      </div>
    </Router>
  );
}

export default App;
