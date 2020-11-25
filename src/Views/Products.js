import React from "react"
import Filters from "../Components/Filters"
import Viewfilter from "../Components/Viewfilter"
import ProductsList from "../Components/ProductsList"
import BreadCrumbs from "../Components/BreadCrumbs"

const Products = () => {
  return (
    <>
      <BreadCrumbs prevPage={["Home"]} currentPage="Products" links={["/"]} />
      <div className="products-content">
        <Filters />
        <div className="products">
          <Viewfilter />
          <ProductsList />
        </div>
      </div>
    </>
  )
}

export default Products
