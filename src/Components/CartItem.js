import React, { useRef, useState, useEffect } from "react"
import { formatPrice } from "../utils/functions"
import { ImBin } from "react-icons/im"
import { useCartContext } from "../context/CartContext"

const CartItem = ({ name, color, image, price, amount, stock, shipping }) => {
  const { addItem, removeItem } = useCartContext()
  const warningRef = useRef(null)
  const [itemAmount, setItemAmount] = useState(amount)
  const handleClick = (val) => {
    if (val === "+") {
      if (itemAmount < stock) {
        let props = { name: name, amount: itemAmount + 1 }
        addItem(props)
      } else {
        warningRef.current.style.opacity = "1"
      }
    } else {
      if (itemAmount > 1) {
        warningRef.current.style.opacity = "0"
        let props = { name: name, amount: itemAmount - 1 }
        addItem(props)
      } else {
        warningRef.current.style.opacity = "0"
      }
    }
  }
  useEffect(() => {
    setItemAmount(amount)
  }, [amount])
  if (price) {
    return (
      <>
        <div className="cart-items-all">
          <div className="image-and-info">
            <img src={image.url} alt={name} />
            <div className="info">
              <div className="name">
                <h4>{name}</h4>
              </div>
              <div className="color">
                <p>Color : </p>
                <div
                  style={{
                    marginLeft: ".4em",
                    backgroundColor: color,
                    width: "15px",
                    height: "15px",
                    borderRadius: "30%",
                    opacity: 0.8,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="price">{formatPrice(price)}</div>
          <div className="quantity">
            <button onClick={() => handleClick("-")}>-</button>
            <p>{itemAmount}</p>
            <button onClick={() => handleClick("+")}>+</button>
          </div>
          <div className="subtotal">
            <p>{formatPrice(amount * price)}</p>
            {shipping && (
              <p style={{ position: "absolute", bottom: "-10px", color: "green" }}>
                Free shipping!
              </p>
            )}
            <ImBin onClick={() => removeItem(name)} />
          </div>
        </div>
        <p
          ref={warningRef}
          style={{ color: "red", opacity: 0, marginBottom: "1em", textAlign: "right" }}
        >
          Maximum stock amount
        </p>
      </>
    )
  } else {
    return null
  }
}

export default CartItem
