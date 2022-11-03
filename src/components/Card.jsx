import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const Card = ({title, photo, superHost, type, beds, rating}) => {
  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="room" />
      </div>
      <div>
        <span>Super Host</span>
        <span>Entire apartment</span>
        <span>2 beds</span>
        <span><AiFillStar /> 4.4 </span>
      </div>
      <h1>Stylist apartment in center of the city</h1>
    </div>
  )
}

export default Card