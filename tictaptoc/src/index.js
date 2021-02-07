import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';


//<Button을 랜더링함
//Board컴포넌트가 Sqaure컴포넌트를 제어하게 됨(제어되는 컴포넌트)
function Square(props){
    //부모(Board)컴포넌트에서 자식(Square)컴포넌트에 prop을 전달함
    //버튼을 클릭하면 경고창 나오게 함
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}    
      </button>
    );
  }
  
  //9개의 사각형을 랜더링함
  class Board extends React.Component {
  
    renderSquare(i) {
      //value prop을 전달
      return <Square 
                value={ this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                />
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  //Game 컴포넌트는 게임판을 렌더링하며 나중에 수정할 자리 표시자 값을 가짐
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber+1);
      const current = history[history.length -1];
      const squares = current.squares.slice();   //불변성을 위해 배열 사본을 만듬
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O'; 
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2 ) ===0,
      })
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      
      const moves = history.map((step, move) => {
        const desc = move ? 'Go to move #'+ move: 'Go to game start';
        return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {desc}
            </button>
        </li>);
      })
      
      let status;
      if(winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}  
              />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
            
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
  
  //TICTATOC게임 룰
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