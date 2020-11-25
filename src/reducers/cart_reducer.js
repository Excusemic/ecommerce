export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "ADD_ITEM":
      const { name, amount } = payload
      let isItem = state.items.filter((item) => item.name === name)
      if (isItem.length === 0) {
        return { ...state, items: [...state.items, payload] }
      } else {
        isItem[0].amount = amount
        return { ...state, items: [...state.items] }
      }

    case "CALC_TOTAL":
      const newTotalArray = payload.map((elem) => {
        return elem.amount * elem.price
      })
      const numberOfItemsArray = payload.map((elem) => {
        return elem.amount
      })
      const numberOfItems = numberOfItemsArray.reduce((a, b) => a + b, 0)
      const newTotal = newTotalArray.reduce((a, b) => a + b, 0)
      return { ...state, total: newTotal, productsNumber: numberOfItems }
    case "REMOVE_ITEM":
      const tempArray = state.items.filter((item) => item.name !== payload)
      console.log(tempArray)
      return { ...state, items: tempArray }

    case "CLEAR_CART":
      return { ...state, items: [] }
    default:
      return { ...state }
  }
}
