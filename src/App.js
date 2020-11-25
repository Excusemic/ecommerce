import React from "react"
import Navbar from "./Components/Navbar"
import CartPage from "./Views/CartPage"
import Products from "./Views/Products"
import Home from "./Views/Home"
import About from "./Views/About"
import SingleProduct from "./Views/SingleProduct"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/:id">
          <SingleProduct />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
