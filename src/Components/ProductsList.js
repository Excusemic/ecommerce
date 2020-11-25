import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useFilterContext } from "../context/FilterContext"
import { formatPrice, getNumberOfPages } from "../utils/functions"
import { AiOutlineSearch } from "react-icons/ai"
import loader from "../assets/830.gif"
const ProductsList = () => {
  const { filtered_products, view, loading } = useFilterContext()
  const [startAtProduct, setStartAtProduct] = useState(1)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState([])

  useEffect(() => {
    setStartAtProduct(() => {
      return page * 6 - 6
    })
  }, [page])
  useEffect(() => {
    let number = getNumberOfPages(filtered_products, 6)
    let tempPages = []
    for (let i = 1; i <= number; i++) {
      tempPages.push(i)
    }
    setPages(tempPages)
    setPage(1)
  }, [filtered_products])
  if (loading) {
    return (
      <div className="loader">
        <img src={loader} alt="Loading..." />
      </div>
    )
  } else {
    if (filtered_products.length > 0) {
      if (view === "grid") {
        return (
          <div>
            <div className="grid">
              {filtered_products.map((product, index) => {
                const { image, price, name, id } = product
                if (index >= startAtProduct && index < startAtProduct + 6) {
                  return (
                    <div className="grid-product-container" key={id}>
                      <div className="grid-product">
                        <div className="overlay">
                          <Link to={`/${id}`}>
                            <AiOutlineSearch />
                          </Link>
                        </div>
                        <div className="image-container">
                          <img src={image} alt={name} />
                        </div>
                      </div>
                      <div className="grid-product-info">
                        <h4>{name}</h4>
                        <h5>{formatPrice(price)}</h5>
                      </div>
                    </div>
                  )
                } else {
                  return null
                }
              })}
            </div>
            <div className="paginator">
              {pages.map((elem) => {
                return (
                  <div
                    key={elem}
                    className={elem === page ? "page-btn page-active" : "page-btn"}
                    onClick={() => setPage(elem)}
                  >
                    {elem}
                  </div>
                )
              })}
            </div>
          </div>
        )
      } else {
        return (
          <div className="list">
            {filtered_products.map((product, index) => {
              const { image, price, name, id, description } = product
              if (index >= startAtProduct && index < startAtProduct + 6) {
                return (
                  <div key={id} className="listed-product">
                    <div className="image-container">
                      <img src={image} alt={name} />
                    </div>

                    <div className="listed-product-info">
                      <h4>{name}</h4>
                      <h5>{formatPrice(price)}</h5>
                      <p>{description.substr(0, 145) + "..."}</p>

                      <Link to={`/${id}`}>
                        <button className="details-btn">details</button>
                      </Link>
                    </div>
                  </div>
                )
              } else {
                return null
              }
            })}
            <div className="paginator">
              {pages.map((elem) => {
                return (
                  <div
                    key={elem}
                    className={elem === page ? "page-btn page-active" : "page-btn"}
                    onClick={() => setPage(elem)}
                  >
                    {elem}
                  </div>
                )
              })}
            </div>
          </div>
        )
      }
    } else {
      return <h4>There are no products matching selected criteria</h4>
    }
  }
}

export default ProductsList
