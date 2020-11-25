import React, { useState, useEffect } from "react"
import { HiViewGrid } from "react-icons/hi"
import { AiOutlineBars } from "react-icons/ai"
import { useFilterContext } from "../context/FilterContext"

const Viewfilter = () => {
  const [state, setState] = useState({
    view: "grid",
    sort: "price_lowest",
  })
  const { changeView, filtered_products } = useFilterContext()
  useEffect(() => {
    changeView({ ...state })
  }, [state, changeView])
  return (
    <div className="filter-view">
      <div className="filter-grid-list">
        <div
          name="grid"
          className="filter-view-btn"
          onClick={() => setState({ ...state, view: "grid" })}
        >
          <HiViewGrid className={state.view === "grid" ? "filter-view-selected" : null} />
        </div>
        <div
          name="list"
          className="filter-view-btn"
          onClick={() => setState({ ...state, view: "list" })}
        >
          <AiOutlineBars className={state.view === "list" ? "filter-view-selected" : null} />
        </div>
      </div>
      <p>
        {filtered_products.length}
        {filtered_products.length === 1 ? " Product" : " Products"} Found
      </p>
      <hr />
      <div>
        <label htmlFor="sort">Sort by</label>
        <select
          name="sort"
          id="sort"
          value={state.sort}
          onChange={(e) => setState({ ...state, sort: e.target.value })}
        >
          <option value="price_lowest">Price (Lowest)</option>
          <option value="price_highest">Price (Highest)</option>
          <option value="name_az">Name (A - Z)</option>
          <option value="name_za">Name (Z - A)</option>
        </select>
      </div>
    </div>
  )
}

export default Viewfilter
