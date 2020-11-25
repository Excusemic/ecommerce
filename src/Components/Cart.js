import React from "react"
import { BiCart } from "react-icons/bi"
import { useCartContext } from "../context/CartContext"

const Cart = () => {
  const { productsNumber } = useCartContext()
  return (
    <div className="cart-container">
      <div className="cart-number">{productsNumber}</div>
      <BiCart />
    </div>
  )
}

export default Cart
