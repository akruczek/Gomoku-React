import React from 'react';
import ReactDOM from 'react-dom';
import {HeadNavbar} from './components/HeadNavbar.jsx';
import {Chart} from './components/Chart.jsx';
import {Stats} from './components/Stats.jsx';
import {Move, checkWinner} from './components/AI.jsx';
import {WinInfo} from './components/WinInfo.jsx';
import {textEng, textPol} from './variables/text.jsx';
import {chartCellsNumber, chartTable, renderChart, renderChartSize, chartHeight, chartWidth} from './variables/chart.jsx';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: textEng,
      isRunGame: false,
      symbol: true,  //true - GREEN CIRCLE, false - RED CROSS
      moves: 0,
      freeCells: chartCellsNumber,
      availableMove: true,  //BLOCKING MOVE DURING COMPUTER TURN
      size: 3,  //1 - SMALL, 2 - MEDIUM, 3 - LARGE
      difficulty: 2,  //1 - EASY, 2 - MEDIUM, 3 - LARGE
      win: false,
      chartTable
    }
  }

  changeSymbol =(event)=> {
    !this.state.isRunGame && this.setState({ symbol: !this.state.symbol });
    event.preventDefault();
  }

  changeLang =(event)=> {
    this.setState({ text: this.state.text === textEng ? textPol : textEng });
    event.preventDefault();
  }

  placeSymbol =(x, y, symbol, isPlayer)=> {
    let newChartTable = this.state.chartTable;
    newChartTable[x][y] = symbol;
    this.setState({chartTable: newChartTable}, () => {
      this.moved(isPlayer);
    });
  }

  move =(difficulty)=> {
    setTimeout(()=> {
      if (!this.state.win) {
        let field = Move(difficulty, this.state.chartTable, (1 + 4 * this.state.size), (this.state.symbol ? "cross" : "circle"));
        console.log("elo");
        console.log(field);
        let x = field[0];
        let y = field[1];
        console.log(x, y);
        this.placeSymbol(x, y, (this.state.symbol ? "cross" : "circle"), false);
        this.setState({availableMove: true});
        this.checkWinner();
      }
    }, 500);
  }

  mouseClick =(event)=> {
    if (this.state.isRunGame && event.target.className !== "symbol" && this.state.availableMove) {
      this.setState({availableMove: false});
      let x = Number(event.target.id.split("-")[0]);
      let y = Number(event.target.id.split("-")[1]);
      this.placeSymbol(x, y, (this.state.symbol ? "circle" : "cross"), true);
      this.checkWinner();
      switch(this.state.difficulty) {
        case 1: this.move("easy"); break;
        case 2: this.move("medium"); break;
        case 3: this.move("hard"); break;
      }
    }
  }

  checkWinner =()=> {
    if (!this.state.win) {
      let winner = checkWinner(5, this.state.chartTable, (1 + 4 * this.state.size));
      if (winner !== false) {
        if (this.state.symbol && winner === "circle" || !this.state.symbol && winner === "cross") {
          console.log("YOU WIN!");
          this.startNewGame(event);
          this.setState({
            win: true
          }, () => { $("#winner").modal("open"); })
        }
        else {
          this.startNewGame();
          this.setState({
            win: false
          }, () => { $("#winner").modal("open"); })
          console.log("YOU LOSE!");
        }
      }
    }
  }

  startNewGame =(event)=> {
    !this.state.isRunGame && renderChart();
    this.setState({
      isRunGame: !this.state.isRunGame,
      moves: 0,
      freeCells: (1 + 4 * this.state.size) * (1 + 4 * this.state.size),
      win: false,
      availableMove: true,
      chartTable
    });
    event && event.preventDefault();
  }

  moved =(isPlayer)=> {
    this.setState({
      moves: isPlayer ? this.state.moves + 1 : this.state.moves,
      freeCells: this.state.freeCells - 1
    });
  }

  resize =(event)=> {
    if (!this.state.isRunGame) {
      this.setState({
        size: this.state.size < 3 ? this.state.size + 1 : 1
      }, () => {
        renderChartSize(1 + 4 * this.state.size, 1 + 4 * this.state.size);
        renderChart();
        this.setState({
          chartTable,
          freeCells: (1 + 4 * this.state.size) * (1 + 4 * this.state.size)
        });
      })
    }
    event.preventDefault();
  }

  changeDifficulty =(event)=> {
    if (!this.state.isRunGame) { this.setState({ difficulty: this.state.difficulty < 3 ? this.state.difficulty + 1 : 1 }); }
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <HeadNavbar text={this.state.text} changeSymbol={this.changeSymbol} symbol={this.state.symbol} startNewGame={this.startNewGame}
          isRunGame={this.state.isRunGame} changeLang={this.changeLang} resize={this.resize} size={this.state.size}
          changeDifficulty={this.changeDifficulty} difficulty={this.state.difficulty}/>
        <Stats text={this.state.text} moves={this.state.moves} freeCells={this.state.freeCells} isRunGame={this.state.isRunGame}/>
        <Chart isRunGame={this.state.isRunGame} symbol={this.state.symbol} moved={this.moved} chartTable={this.state.chartTable}
          mouseClick={this.mouseClick}/>
        <WinInfo win={this.state.win}/>
      </div>
    );
  }
}
