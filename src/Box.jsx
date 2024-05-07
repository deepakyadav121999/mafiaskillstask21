import React from 'react'
import './box.css'

function Box ({name,description,image}) {
  console.log("box is comming")
  return (
    <div className='box'>
        <img src={image} alt="" />
        <h2 className='name_box'>{name}</h2>
        <p>{description}</p>
        </div>
  )
}

export default Box