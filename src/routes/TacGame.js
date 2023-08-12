import React , {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Board from '../components/Board';
import ScoreBoard from '../components/ScoreBoard';
import RestButton from '../components/RestButton';


const TacGame = () => {
    

        const WIN_CONDITIONS = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
        ]
      
        const [board,setBoard] = useState(Array(9).fill(null));
        const [xPlaying,setxPlaying] = useState(true);
        const[score,setScore] = useState({ xScore:0, oScore:0 })
        const [gameOver,setGameOver] = useState(false)
       
        const handleBoxClick = (boxIdx) => {
          const updateBoard = board.map((value,idx)=>{
            if (idx === boxIdx){
              return xPlaying === true ? "X" : "O" ;
            }
            else{
              return value;
            }
          })
      
          const winner = checkWinnwer(updateBoard);
      
          if(winner){
            if(winner === "O"){
              let{oScore} = score;
              oScore+= 1
              setScore({...score,oScore})
            } else{
              let{xScore} = score;
              xScore+= 1
              setScore({...score,xScore})
            }
          }
      
          
      
      
          setBoard(updateBoard);
      
          setxPlaying(!xPlaying);
        }
      
      
        const checkWinnwer = (board) => {
          for (let i=0;i < WIN_CONDITIONS.length;i++){
            const [x,y,z] = WIN_CONDITIONS[i];
      
            if(board[x] && board[x] === board[y] && board[y] === board[z]){
              setGameOver(true)
              return board[x];
            }
          }
        }
      
        const resetBoard = () =>{
          setGameOver(false);
          setBoard(Array(9).fill(null))
        }




  return (
    <>
    <div>
       
    <Navbar />
    <br></br><br></br><br></br><br></br><br></br>
    <ScoreBoard  score={score} xPlaying={xPlaying}/>
     <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
     <RestButton resetBoard={resetBoard} />
     <Footer/>
    </div>
    </>
    
  )
}

export default TacGame;