import React, { useState, useEffect, useRef, useCallback } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { useProductContext } from "../context/ProductContext"
import loader from "../assets/830.gif"
import { formatPrice } from "../utils/functions"
import { Link } from "react-router-dom"
const Slider = () => {
  const { featured, products_loading } = useProductContext()
  const [value, setValue] = useState(0)
  const autoScrollRef = useRef(null)
  const timeOutRef = useRef(null)

  const handleValue = useCallback(
    (e) => {
      clearTimeout(autoScrollRef.current)
      if (e === "+") {
        if (value < featured.length - 1 && value < 4) {
          setValue(value + 1)
        } else {
          setValue(-1)
        }
      } else if (e === "+/") {
        timeOutRef.current = setTimeout(() => {
          if (value < featured.length - 1 && value < 4) {
            setValue(value + 1)
          } else {
            setValue(-1)
          }
        }, 1000)
      } else {
        if (value >= 0) {
          setValue(value - 1)
        } else {
          setValue(4)
        }
      }
    },
    [value, featured.length]
  )

  const addClass = (index) => {
    for (let i = 0; (i = featured.length - 1); i++) {
      if (value === 4) {
        let difference = value - index
        if (index === 5) {
          return "last"
        } else if (index === 4) {
          return "pre-last"
        } else if (index === 3) {
          return "current"
        } else {
          return `transform${difference - 1}minus`
        }
      }
      if (value === -1) {
        let difference = index + value
        if (index === 0) {
          return "first"
        } else if (index === 1) {
          return "post-first"
        } else if (index === 2) {
          return "transform2plus"
        } else {
          return `transform${difference + 1}plus`
        }
      }
      if (index === value) {
        return "current"
      } else if (index > value) {
        let difference = index - value
        return `transform${difference}plus`
      } else if (index < value) {
        let difference = value - index
        return `transform${difference}minus`
      }
    }
  }
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      handleValue("+")
    }, 3000)
    return () => {
      clearInterval(autoScrollRef.current)
    }
  }, [handleValue])
  return (
    <div className="slider-container">
      <h2>Featured Products</h2>
      <hr />
      {!products_loading ? (
        <div
          className="slider"
          onMouseOver={() => clearInterval(autoScrollRef.current)}
          onMouseLeave={() => handleValue("+/")}
        >
          <FaAngleLeft className="prev-btn" onClick={() => handleValue("-")} />
          {featured.map((product, index) => {
            const { image, price, name, id } = product
            return (
              <div className={`inner-slider ${addClass(index)}`} key={index}>
                <div className="grid-product-container" key={id}>
                  <div className="grid-product">
                    <div className="image-container">
                      {" "}
                      <div className="overlay">
                        <Link to={`/${id}`}>
                          <AiOutlineSearch />
                        </Link>
                      </div>
                      <img src={image} alt={name} />
                    </div>
                  </div>
                  <div className="grid-product-info">
                    <h4>{name}</h4>
                    <h5>{formatPrice(price)}</h5>
                  </div>
                </div>
              </div>
            )
          })}

          <FaAngleRight className="next-btn" onClick={() => handleValue("+")} />
        </div>
      ) : (
        <div className="loader">
          <img src={loader} alt="Loading..."></img>
        </div>
      )}
      <Link to="/products">
        <button>All products</button>
      </Link>
    </div>
  )
}

export default Slider
