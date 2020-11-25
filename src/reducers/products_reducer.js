export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "GET_PRODUCTS_INIT":
      return { ...state, products_loading: true, products_error: false }
    case "GET_PRODUCTS_ERROR":
      return { ...state, products_loading: false, products_error: true }
    case "GET_PRODUCTS_SUCCESS":
      const featured = payload.filter((product) => product.featured)
      return {
        ...state,
        products_loading: false,
        products_error: false,
        products: payload,
        featured: featured,
      }
    case "GET_SINGLE_PRODUCT_INIT":
      return { ...state, single_product_loading: true, single_product_error: false }
    case "GET_SINGLE_PRODUCT_ERROR":
      return { ...state, single_product_loading: false, single_product_error: true }
    case "GET_SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        single_product_loading: false,
        single_product_error: false,
        single_product: payload,
      }
    default:
      return { ...state }
  }
}
