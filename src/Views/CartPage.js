import React from "react"
import { useCartContext } from "../context/CartContext"
import CartItem from "../Components/CartItem"
import { Link } from "react-router-dom"
import { formatPrice } from "../utils/functions"
const CartPage = () => {
  const { items, clearCart, total } = useCartContext()
  const itemsWithFee = items.filter((item) => !item.shipping)
  const allFees = itemsWithFee.map((item) => {
    return item.price
  })
  const totalFee = allFees.reduce((a, b) => a + b, 0)
  const fee = (totalFee / 100) * 5
  if (items.length !== 0) {
    return (
      <div className="cart-page-container">
        <div className="cart-page-content">
          <div className="cart-page-header">
            <h4>Item</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Subtotal</h4>
          </div>
          <hr></hr>
          {items
            ? items.map((item, index) => {
                return <CartItem key={index} {...item} />
              })
            : null}
          <hr></hr>
        </div>
        <div className="btns">
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
          <button onClick={() => clearCart()}>Clear Shopping Cart</button>
        </div>
        <div className="proceed-container">
          <div className="proceed">
            <div>
              <h4>Subtotal : </h4>
              <p>{formatPrice(total)}</p>
            </div>
            <div>
              <h4>Shipping Fee : </h4>
              <p>{formatPrice(fee)}</p>
            </div>
            <hr />
            <div className="proceed-total">
              <h4>Total : </h4>
              <p>{formatPrice(total + fee)}</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="empy-cart">
        <h1>Your cart is empty</h1>
        <Link to="/products">
          <button className="back-to-products-btn">Fill it</button>
        </Link>
      </div>
    )
  }
}

export default CartPage
