import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useProductContext } from "../context/ProductContext"
import Product from "../Components/Product"
import { Link } from "react-router-dom"
import loader from "../assets/830.gif"
import BreadCrumbs from "../Components/BreadCrumbs"
const SingleProduct = () => {
  const {
    single_product,
    single_product_loading,
    single_product_error,
    getSingleProduct,
  } = useProductContext()

  const [state, setState] = useState({
    product: null,
    loading: true,
    error: false,
  })
  console.log(state.product)
  const { id } = useParams()

  useEffect(() => {
    getSingleProduct(id)
  }, [id, getSingleProduct])
  useEffect(() => {
    setState({
      product: single_product,
      loading: single_product_loading,
      error: single_product_error,
    })
  }, [single_product, single_product_loading, single_product_error])
  if (state.loading) {
    return (
      <div className="loader">
        <img src={loader} alt="Loading..." />
      </div>
    )
  } else {
    if (state.error) {
      return <h1>Error with loading product</h1>
    } else if (state.product) {
      return (
        <>
          <BreadCrumbs
            prevPage={["Home", "Product"]}
            links={["/", "/products"]}
            currentPage={state.product.name}
          />
          <div className="single-product-container">
            <div className="single-product-content">
              <Link to="/products">
                <button className="back-to-products-btn">BACK TO PRODUCTS</button>
              </Link>
              <div className="single-product-info">
                <Product props={state.product} />
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <div className="loader">
          <img src={loader} alt="Loading..." />
        </div>
      )
    }
  }
}

export default SingleProduct
