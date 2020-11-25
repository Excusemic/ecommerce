import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { FilterContextProvider } from "./context/FilterContext"
import ProductContextProvider from "./context/ProductContext"
import { CartContextProvider } from "./context/CartContext"

ReactDOM.render(
  <ProductContextProvider>
    <FilterContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </FilterContextProvider>
  </ProductContextProvider>,

  document.getElementById("root")
)
