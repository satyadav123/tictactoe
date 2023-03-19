import React, { useState } from 'react';

import '.App.css'
export default function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState('X');
    const [winner, setWinner] = useState(null);
  const HandlePlay=()=>{
    setBoard(Array(9).fill(null));
  }
  const HandlePlaywin=()=>{
    setBoard(Array(9).fill(null));
    setWinner(null);
  }
    // Define a function to check if a player has won the game
    const calculateWinner = () => {
      const lines = [      [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
      return null;
    };
  
    // Define a function to handle a cell click
    const handleClick = (i) => {
      if (!board[i] && !winner) {
        const newBoard = [...board];
        newBoard[i] = turn;
        setBoard(newBoard);
        setTurn(turn === 'X' ? 'O' : 'X');
        setWinner(calculateWinner());
      }
    };
  
    // Define a function to render a cell
    const renderCell = (i) => (
      <button className="cell" onClick={() => handleClick(i)}>
        {board[i]}
      </button>
    );
  
  return (
<>
<div className='Heading'><h1>Tic-Tac-Toe</h1></div>
    <div className="board">
    
      <div className="row">
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </div>
      <div className="row">
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </div>
      <div className="row">
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
      {winner && <div className="result">{winner} wins!</div>}
      {winner && <div className="clearButton"onClick={HandlePlaywin}><button>Play Again</button></div>}
      {!winner && !board.includes(null) && (
        <div className="result">It's a draw!</div>
      )}
       {!winner && !board.includes(null) && (
      <div className="clearButton" onClick={HandlePlay}><button>Play Again</button></div>
      )}
    </div>
</>
  )
}
