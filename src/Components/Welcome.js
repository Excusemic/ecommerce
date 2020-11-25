import React from "react"
import image1 from "../assets/hero-bcg-2.jpeg"
import image2 from "../assets/hero-bcg.jpeg"
import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="left-side">
          <h2>Design Your Comfort Zone</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat libero corrupti
            consequuntur maxime, quidem est neque possimus odio.
          </p>
          <Link to="/products">
            <button>SHOP NOW</button>
          </Link>
        </div>
        <div className="right-side">
          <img src={image2} alt="Royal House" />
          <img src={image1} alt="Royal House" />
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
