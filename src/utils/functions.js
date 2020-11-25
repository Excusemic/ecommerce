export const getUniqueValue = (data, type) => {
  let allTypes = data.map((elem) => elem[type])
  if (type === "colors") {
    allTypes = allTypes.flat()
  }

  const unique = new Set(allTypes)
  return ["all", ...unique]
}
export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100)
}
export const getNumberOfPages = (products, perPage) => {
  const numberOfPages = Math.ceil(products.length / perPage)
  return numberOfPages
}
export const calcStarsPerc = (stars) => {
  const perc = stars / 0.05
  return perc
}
