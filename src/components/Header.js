import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"

function Header() {
  const {cartItems} = useContext(Context)

  const emptyCart = cartItems.some(x => x !== null)

  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        {<i className={`ri-shopping-cart-${emptyCart ? "fill" : "line"} ri-fw ri-2x`}></i>}
      </Link>
    </header>
  );
}

export default Header;
