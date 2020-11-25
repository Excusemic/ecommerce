import React, { useContext, useReducer, useEffect, useCallback } from "react"
import { reducer } from "../reducers/filters_reducer"
import { useProductContext } from "./ProductContext"
const initialState = {
  loading: true,
  all_products: [],
  filtered_products: [],
  view: "grid",
  sort: "price_lowest",
  search: "",
  filters: {
    name: "",
    category: "all",
    company: "all",
    colors: "all",
    price: 999999,
    freeShiping: false,
  },
}
const FilterContext = React.createContext()

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext()

  const [state, dispatch] = useReducer(reducer, initialState)

  //FUNCTIONS

  const changeFilters = useCallback((newFilters) => {
    dispatch({ type: "FILTERS_CHANGED", payload: newFilters })
  }, [])
  const changeView = useCallback((newView) => {
    dispatch({ type: "VIEW_CHANGED", payload: newView })
  }, [])

  //EFFECTS
  useEffect(() => {
    dispatch({ type: "LOADED_ALL_PRODUCTS", payload: products })
  }, [products])
  useEffect(() => {
    if (state.all_products.length !== 0) {
      dispatch({ type: "PRODUCTS_FILTERED", payload: state.filters })
    }
  }, [state.all_products, state.filters, state.sort])
  return (
    <FilterContext.Provider value={{ ...state, changeFilters, changeView }}>
      {children}
    </FilterContext.Provider>
  )
}
export const useFilterContext = () => {
  return useContext(FilterContext)
}
