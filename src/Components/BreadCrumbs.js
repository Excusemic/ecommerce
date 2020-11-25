import React from "react"
import { Link } from "react-router-dom"

const BreadCrumbs = ({ prevPage, links, currentPage }) => {
  return (
    <div className="breadcrumbs-container">
      <div className="breadcrumbs-content">
        {links.map((page, index) => {
          return (
            <Link to={page} key={index}>
              {prevPage[index]}&nbsp;/&nbsp;
            </Link>
          )
        })}
        <p>{currentPage}</p>
      </div>
    </div>
  )
}

export default BreadCrumbs
