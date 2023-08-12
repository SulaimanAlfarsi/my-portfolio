import React from 'react'

import "./RestButton.css"

const RestButton = ({resetBoard}) => {
  return (
    <button className='btn-rest' onClick={resetBoard}>Rest</button>
  )
}

export default RestButton