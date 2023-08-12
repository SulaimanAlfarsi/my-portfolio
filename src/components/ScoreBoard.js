import React from 'react'

import "./ScoreBoard.css"


const ScoreBoard = ({score,xPlaying}) => {
    const {xScore, oScore} = score;
  return ( 
    <>
    <div className='tt'>Play Tic Tac Toe with a friend and compete for victory on my website!</div>
    <div className='scoreboard'>
        <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
    </>
  )
}

export default ScoreBoard

