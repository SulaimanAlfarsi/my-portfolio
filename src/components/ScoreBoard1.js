import React from 'react'
import "./Candy.css";


const ScoreBoard1 = ({score}) => {
  return (
    <div className='score-board'>
        <h2>{score}</h2>
    </div>
  )
}

export default ScoreBoard1