import React, { useState, useRef, useEffect } from "react"
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai"
import { useCartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

import { calcStarsPerc, formatPrice } from "../utils/functions"
const Product = ({ props }) => {
  const {
    colors,
    company,
    description,
    id,
    images,
    name,
    price,
    reviews,
    stars,
    stock,
    shipping,
  } = props
  const [currentImage, setCurrentImage] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [amount, setAmount] = useState(1)
  const starsContainerUpper = []
  const starsContainerLower = []
  const warningRef = useRef(null)
  const { addItem } = useCartContext()

  for (let i = 1; i <= 5; i++) {
    starsContainerUpper.push(<span key={i}>★</span>)
    starsContainerLower.push(<span key={i}>★</span>)
  }
  const starsWidth = calcStarsPerc(stars)
  const handleClick = (val) => {
    if (val === "+") {
      if (amount < stock) {
        setAmount(amount + 1)
      } else {
        warningRef.current.style.opacity = "1"
      }
    } else {
      if (amount > 1) {
        warningRef.current.style.opacity = "0"
        setAmount(amount - 1)
      } else {
        warningRef.current.style.opacity = "0"
      }
    }
  }
  useEffect(() => {
    setCurrentImage(images[0].url)
    setSelectedColor(colors[0])
  }, [colors, images])
  return (
    <>
      <div className="images">
        <div className="current-image">
          <img src={currentImage} alt={name} />
        </div>
        <div className="images-container">
          {images.map((image) => {
            const { id, url } = image
            return (
              <img
                src={url}
                key={id}
                alt={name}
                onClick={() => setCurrentImage(url)}
                className={currentImage === url ? "selected-img" : null}
              ></img>
            )
          })}
        </div>
      </div>
      <div className="info">
        <h2>{name}</h2>
        <div className="stars">
          <div className="rating">
            <div
              style={{
                width: `${starsWidth}%`,
                color: "#e7711b",
                padding: 0,
                position: "absolute",
                zIndex: 1,
                display: "flex",
                top: 0,
                left: 0,
                overflow: "hidden",
              }}
            >
              {starsContainerUpper}
            </div>
            <div className="rating-lower">{starsContainerLower}</div>
          </div>

          <p>({reviews} customer reviews)</p>
        </div>
        <h4 className="price">{formatPrice(price)}</h4>
        <p className="descripion">{description}</p>
        <div className="infos">
          <div>
            <h5>Available : </h5>
            <p>{stock > 0 ? "In stock" : "Not available"}</p>
          </div>
          <div>
            <h5>SKU : </h5>
            <p>{id}</p>
          </div>
          <div>
            <h5>Brand : </h5>
            <p>{company}</p>
          </div>
        </div>
        <hr />

        {stock > 0 ? (
          <>
            <div className="colors-product">
              <h5>Colors : </h5>
              {colors.map((elem, index) => {
                return (
                  <div
                    onClick={() => setSelectedColor(elem)}
                    className={
                      elem === selectedColor ? "single-color selected-color" : "single-color"
                    }
                    style={{
                      backgroundColor: elem,
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                    key={index}
                  ></div>
                )
              })}
            </div>
            <div className="add-to-cart" style={{ userSelect: "none" }}>
              <p ref={warningRef} style={{ color: "red", opacity: 0 }}>
                Maximum stock amount
              </p>
              <div className="btns">
                <AiOutlineMinusSquare className="cart-volume-btn" onClick={() => handleClick("-")}>
                  -
                </AiOutlineMinusSquare>
                <p>{amount}</p>
                <AiOutlinePlusSquare className="cart-volume-btn" onClick={() => handleClick("+")}>
                  +
                </AiOutlinePlusSquare>
              </div>
              <Link to="/cart">
                <button
                  className="add-to-cart-btn"
                  onClick={() =>
                    addItem({
                      color: selectedColor,
                      image: images[0],
                      price: price,
                      name: name,
                      amount: amount,
                      stock: stock,
                      shipping: shipping,
                    })
                  }
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </>
  )
}

export default Product
