import React, { useState, useEffect } from "react"
import { useFilterContext } from "../context/FilterContext"
import { getUniqueValue, formatPrice } from "../utils/functions"

const Filters = () => {
  const { changeFilters, all_products } = useFilterContext()
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    name: "",
    category: "all",
    company: "all",
    colors: "all",
    price: 309999,
    freeShiping: false,
  })
  const allCategories = getUniqueValue(all_products, "category")
  const allCompanies = getUniqueValue(all_products, "company")
  const allColors = getUniqueValue(all_products, "colors")
  const allPrices = getUniqueValue(all_products, "price").splice(1)
  const maxPrice = Math.max(...allPrices)
  const minPrice = Math.min(...allPrices)

  //update state functions
  const updateFilters = (filter, val) => {
    setFilters((prevState) => {
      return { ...prevState, [filter]: val }
    })
  }
  const clearFilters = () => {
    setFilters({
      name: "",
      category: "all",
      company: "all",
      colors: "all",
      price: 999999,
      freeShiping: false,
    })
  }
  useEffect(() => {
    changeFilters(filters)
  }, [filters, changeFilters])
  return (
    <div className="filter_products">
      <div>
        <input
          placeholder="search..."
          type="text"
          name="name"
          id="name"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }} className="categories">
        <h4 onClick={() => setIsOpen(!isOpen)}>Category &#8595; </h4>
        <div className={isOpen ? "categories-p categories-p-open " : "categories-p "}>
          {allCategories.map((elem, index) => {
            return (
              <p
                className={elem === filters.category ? "select-category" : null}
                key={elem}
                style={{ margin: ".3em 0em" }}
                value="category"
                onClick={(e) => updateFilters(e.target.getAttribute("value"), elem)}
              >
                {elem}
              </p>
            )
          })}
        </div>
      </div>
      <div className="companies-container">
        <h4>Company</h4>
        <select
          name="company"
          id="company"
          onChange={(e) => updateFilters(e.target.name, e.target.value)}
        >
          {allCompanies.map((elem) => {
            return (
              <option value={elem} key={elem}>
                {elem}
              </option>
            )
          })}
        </select>
      </div>
      <div className="colors-container">
        <h4>Colors</h4>
        <div className="colors">
          {allColors.map((elem) => {
            return elem === "all" ? (
              <span
                key={elem}
                onClick={() => updateFilters("colors", elem)}
                className={elem === filters.colors ? "single-color selected-color" : "single-color"}
              >
                All
              </span>
            ) : (
              <div
                className={elem === filters.colors ? "single-color selected-color" : "single-color"}
                style={{
                  backgroundColor: elem,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }}
                key={elem}
                value="colors"
                onClick={(e) => updateFilters(e.target.getAttribute("value"), elem)}
              ></div>
            )
          })}
        </div>
      </div>
      <div className="price">
        <h4>Price range</h4>
        <input
          type="range"
          name="price"
          id="price"
          min={minPrice}
          max={maxPrice}
          value={filters.price}
          onChange={(e) => updateFilters(e.target.name, e.target.value)}
        />
        <p>{formatPrice(filters.price)}</p>
      </div>
      <div className="freeShipping">
        <h4>Free shiping</h4>
        <input
          type="checkbox"
          name="freeShipping"
          id="freeShipping"
          onChange={(e) =>
            e.target.checked
              ? setFilters({ ...filters, freeShiping: true })
              : setFilters({ ...filters, freeShiping: false })
          }
        />{" "}
      </div>
      <div>
        <button onClick={clearFilters} className="clear-filters-btn">
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default Filters
