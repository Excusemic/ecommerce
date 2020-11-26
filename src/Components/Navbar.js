import React, { useState } from "react"
import { links } from "../utils/constants"
import Cart from "./Cart"
import { Link } from "react-router-dom"
import logo from "../assets/cover.png"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        className={isOpen ? "nav-overlay open-overlay" : "nav-overlay"}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="nav-container">
        <nav>
          <Link to="/">
            <img src={logo} alt="Royal House" />
          </Link>

          <ul
            style={{ textDecoration: "none", listStyleType: "none" }}
            className={isOpen ? "openMenu" : null}
          >
            <h4>Menu</h4>
            {links.map((elem) => {
              const { id, text } = elem
              return (
                <Link key={id} to={`/${text}`} onClick={() => setIsOpen(false)}>
                  <li>{text}</li>
                </Link>
              )
            })}
            <div className="cart mobile-cart" onClick={() => setIsOpen(false)}>
              <Link to="/cart">
                <div className="cart-text">
                  <p>Cart</p>
                  <Cart />
                </div>
              </Link>
            </div>
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
          <div className="menu">
            <FaBars onClick={() => setIsOpen(!isOpen)} />
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
