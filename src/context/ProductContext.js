import React, { useContext, useReducer, useEffect, useCallback } from "react"
import axios from "axios"
import { reducer } from "../reducers/products_reducer"
import { products_url as url, single_product_url } from "../utils/constants"

const initialState = {
  products: [],
  featured: [],
  products_loading: false,
  products_error: false,
  single_product: null,
  single_product_loading: false,
  single_product_error: false,
}
const ProductContext = React.createContext()
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const fetchProducts = async () => {
    dispatch({ type: "GET_PRODUCTS_INIT" })
    try {
      const response = await axios.get(url)
      const products = response.data
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products })
    } catch {
      dispatch({ type: "GET_PRODUCTS_ERROR" })
    }
  }
  const fetchSingleProduct = async (url) => {
    dispatch({ type: "GET_SINGLE_PRODUCT_INIT" })
    try {
      const response = await axios.get(url)
      const product = response.data
      dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: product })
    } catch {
      dispatch({ type: "GET_SINGLE_PRODUCT_ERROR" })
    }
  }
  //functions
  const getSingleProduct = useCallback((id) => {
    let url = single_product_url + id
    fetchSingleProduct(url)
  }, [])
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  )
}
export const useProductContext = () => {
  return useContext(ProductContext)
}
export default ProductContextProvider
