import React, { useState, useContext } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
  const {cartItems, emptyCart} = useContext(Context)
  const [buttonText, setButtonText] = useState("Place Order")
  const totalCost = (5.99 * cartItems.length).toLocaleString("fr-FR", {style: "currency", currency: "EUR"})

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} price={5.99.toLocaleString("fr-FR", {style: "currency", currency: "EUR"})} />
  ))

  const checkoutOrder = () => {
    setButtonText("Ordering...")
    setTimeout(() => {
      emptyCart()
      setButtonText("Order completed !")
    }, 3000)
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCost}</p>
      {
        cartItemElements.length > 0 ?
        <div className="order-button">
          <button onClick={checkoutOrder}>{buttonText}</button>
        </div> :
        <p>You have no item in your cart (yet)</p>
      }
    </main>
  );
}

export default Cart;
