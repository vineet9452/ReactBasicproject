import React from 'react'
import "./Navigation.css"
const Navigation = () => {
  return (
    <div>
       <nav>
      <div>
        <img src="images/brand_logo.png" alt="" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>login</button>
    </nav>
    </div>
  )
}

export default Navigation
