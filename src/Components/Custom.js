import React from "react"
import { GiCompass, GiDiamondHard, GiBookCover } from "react-icons/gi"

const Custom = () => {
  return (
    <div className="custom-container">
      <div className="bg-clip"></div>
      <div className="custom-content">
        <div className="upper">
          <h2>Custom Furniture Built Only For You</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora reiciendis,
            perspiciatis dolor dolore delectus beatae eos eveniet debitis maiores!
          </p>
        </div>
        <div className="lower">
          <div className="card">
            <GiCompass></GiCompass>
            <h3>Mission</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum fuga illum odit
              laudantium quasi.
            </p>
          </div>
          <div className="card">
            <GiDiamondHard></GiDiamondHard>
            <h3>Vision</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum fuga illum odit
              laudantium quasi.
            </p>
          </div>
          <div className="card">
            <GiBookCover></GiBookCover>
            <h3>History</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum fuga illum odit
              laudantium quasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Custom
