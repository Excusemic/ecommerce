export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "LOADED_ALL_PRODUCTS":
      return { ...state, all_products: payload }
    case "FILTERS_CHANGED":
      return { ...state, filters: payload }
    case "PRODUCTS_FILTERED":
      let { all_products } = state
      let sorting = state.sort
      let { name, category, company, colors, price, freeShiping } = payload
      let tempProducts = [...all_products]
      if (name) {
        tempProducts = tempProducts.filter((product) => product.name.toLowerCase().startsWith(name))
      }
      if (category !== "all") {
        tempProducts = tempProducts.filter((product) => product.category === category)
      }
      if (company !== "all") {
        tempProducts = tempProducts.filter((product) => product.company === company)
      }
      if (colors !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.colors.find((c) => c === colors)
        })
      }

      tempProducts = tempProducts.filter((product) => product.price <= price)

      if (freeShiping) {
        tempProducts = tempProducts.filter((product) => product.shipping === true)
      }
      if (sorting === "price_lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price)
      }
      if (sorting === "price_highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price)
      }
      if (sorting === "name_az") {
        tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name))
      }
      if (sorting === "name_za") {
        tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name))
        tempProducts = tempProducts.reverse()
      }

      return { ...state, filtered_products: tempProducts, loading: false }

    case "VIEW_CHANGED":
      let { view, sort } = payload
      return { ...state, view, sort }
    default:
      return { ...state }
  }
}
