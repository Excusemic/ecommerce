import React, { useContext, useReducer, useEffect } from "react"
import { reducer } from "../reducers/cart_reducer"

const CartContext = React.createContext()
const initialState = {
  items: [],
  total: null,
  productsNumber: 0,
}
export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const addItem = (props) => {
    dispatch({ type: "ADD_ITEM", payload: props })
  }
  const removeItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item })
  }
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }
  useEffect(() => {
    dispatch({ type: "CALC_TOTAL", payload: state.items })
  }, [state.items])
  return (
    <CartContext.Provider value={{ addItem, ...state, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
export const useCartContext = () => {
  return useContext(CartContext)
}
