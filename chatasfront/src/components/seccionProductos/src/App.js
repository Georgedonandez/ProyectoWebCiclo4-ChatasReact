import "./App.css";
import Navigation from "./components/Navigation";
import Carrusel from "./components/Carrusel";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="Body">
      <Navigation />
      <Carrusel />
      <ShoppingCart />
    </div>
  );
}

export default App;
