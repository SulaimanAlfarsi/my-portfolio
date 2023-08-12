import React from 'react'
import Tac from '../components/Tac';
import "./Board.css"


const Board = ({board,onClick}) => {
  return (
    <>
    <div className='board'>
        {board.map((value,idx) => {
            return <Tac value={value} onClick={()=> value === null && onClick(idx)} />

        })}
        </div>
        </>
  )
}

export default Board