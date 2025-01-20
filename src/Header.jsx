import { useContext } from "react";
import { CartContext } from "./contexts";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [cart, setCart] = useContext(CartContext);


  return (
    <nav>
      <Link to="/">
        <h1 className="logo">Padre Gino's Pizza</h1>
      </Link>
      <div className="nav-cart">
        🛒<span className="nav-cart-number"> {cart.length} </span>
        {cart.length > 0 && (
          <button onClick={() => setCart([])}>Clear Cart</button>
        )}
      </div>
    </nav>
  );
}
