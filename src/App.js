import React from "react";
import { Switch, Route } from "react-router-dom"
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

import "./normalize.css"
import "./styles.css"

/*
# Challenge

1. Only render the "Place Order" button if there are items in the cart

2. Change the trash icon to a filled-in trash icon when hovering over it

Filled trash icon to use when hovering:
<i className="ri-delete-bin-fill"></i>

Empty trash icon to use when NOT hovering:
<i className="ri-delete-bin-line"></i>
*/

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;