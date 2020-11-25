import React from "react"
import { links } from "../utils/constants"
import Cart from "./Cart"
import { Link } from "react-router-dom"
import logo from "../assets/cover.png"

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <Link to="/">
          <img src={logo} alt="Royal House" />
        </Link>

        <ul style={{ textDecoration: "none", listStyleType: "none" }}>
          {links.map((elem) => {
            const { id, text } = elem
            return (
              <Link key={id} to={`/${text}`}>
                <li>{text}</li>
              </Link>
            )
          })}
        </ul>
        <div className="cart-login">
          <div className="cart">
            <Link to="/cart">
              <div className="cart-text">
                <p>Cart</p>
                <Cart />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
