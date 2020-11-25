import React from "react"
import BreadCrumbs from "../Components/BreadCrumbs"
import image from "../assets/hero-bcg.jpeg"

const About = () => {
  return (
    <div className="about-container">
      <BreadCrumbs prevPage={["Home"]} currentPage="About" links={["/"]} />
      <div className="about-content">
        <div className="left-side">
          <img src={image} alt="Royal House" />
        </div>
        <div className="right-side">
          <h2>Our Story</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod cumque laboriosam,
            itaque delectus recusandae, repellendus possimus minus aut quibusdam odit alias?
            Quisquam dolorem officiis alias qui cupiditate recusandae ipsa, consequatur ipsam sit
            quod, animi doloribus quibusdam culpa, reiciendis exercitationem nesciunt. Rerum,
            debitis distinctio ratione odit minima dolorum veniam voluptate.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
