import { useContext } from "react";
import { CartContext } from "./contexts";



export default function Header() {

    const [cart, setCart] = useContext(CartContext);

  
    console.log(cart);



    return (
      <nav>
        <h1 className="logo">Padre Gino's Pizza</h1>
        <div className="nav-cart">
          🛒<span className="nav-cart-number"> {cart.length} </span>
          {cart.length > 0 && (
            <button onClick={() => setCart([])}>Clear Cart</button>)}
        </div>
      </nav>
    );
  }