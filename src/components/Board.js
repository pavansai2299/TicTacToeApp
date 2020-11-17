import React, { Component } from 'react';
import './Square.css';
import Square from './Square';


var style2 = {
  color : "green"
}

var style3 = {
  color : "red"
}

var style4 = {
  color : "orange"
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    const {squares, xIsNext} = this.state;
    const square = squares.slice();
    if (calculateWinner(square) || square[i]) {
      return;
    }
    square[i] = xIsNext ? 'X' : 'O';
    this.setState({squares: square, xIsNext: !xIsNext});
  }

  resetClick(){
    this.setState({squares:Array(9).fill(null),xIsNext: true});
  }

  renderSquare(i) {
    const {squares, xIsNext} = this.state;
    return (
      <Square
        value={squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const {squares, xIsNext} = this.state;
    const winner = calculateWinner(squares);
    const check_full = checkFull(squares);
    let status;
    if (winner) {
      status = <h3 className="status" style={style2}>Winner : {winner}</h3>;
    } 
    else if(check_full) {
      status = <h3 className="status" style={style3}>No one wins</h3>;
    }
    else {
      status = <h3 className="status" style={style4}>Next player: {this.state.xIsNext ? 'X' : 'O'}</h3>;
    }

    return (
      <div>
        {status}
        {/* <h3 className="status">{status}</h3> */}
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
        <br />
        <button className="reset" onClick= { this.resetClick.bind(this) }>Restart</button>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    const style3 ={
      color : "yellow"
    };
    return (
      <div className="game">
        <div className="game-board">
          <h1 style ={style3}>Tic Tac Toe</h1>
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
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
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

function checkFull(squares){
  let flag = 1;
  for(let i=0; i<squares.length; i++){
    if(!squares[i])
    {
      flag=0;
      break;
    }
  }

  if(flag === 1){
    return true;
  }
  else{
    return false;
  }
}

export default Game;
