import React from 'react';
import ReactDOM from 'react-dom';
import {HeadNavbar} from './components/HeadNavbar.jsx';
import {Chart} from './components/Chart.jsx';
import {chartCellsNumber, chartTable, renderChart, renderChartSize, chartHeight, chartWidth} from './variables/chart.jsx';
import {Stats} from './components/Stats.jsx';
import {textEng, textPol} from './variables/text.jsx';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: textEng,
      isRunGame: false,
      symbol: true,  //true - GREEN CIRCLE, false - RED CROSS
      moves: 0,
      freeCells: chartCellsNumber,
      size: 3,  //1 - SMALL, 2 - MEDIUM, 3 - LARGE
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

  mouseClick =(event)=> {
    if (this.state.isRunGame && event.target.className !== "symbol") {
      let x = Number(event.target.id.split("-")[0]);
      let y = Number(event.target.id.split("-")[1]);
      let newChartTable = this.state.chartTable;
      newChartTable[x][y] = this.state.symbol ? "circle" : "cross";
      this.setState({ chartTable: newChartTable });
      this.moved();
    }
  }

  startNewGame =(event)=> {
    !this.state.isRunGame && renderChart();
    this.setState({
      isRunGame: !this.state.isRunGame,
      moves: 0,
      // freeCells: chartCellsNumber,
      chartTable
    });
    event.preventDefault();
  }

  moved =()=> {
    this.setState({
      moves: this.state.moves + 1,
      freeCells: this.state.freeCells - 1
    });
  }

  resize =(event)=> {
    if (!this.state.isRunGame) {
      this.setState({
        size: this.state.size < 3 ? this.state.size + 1 : 1,
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

  render() {
    return (
      <div className="App">
        <HeadNavbar text={this.state.text} changeSymbol={this.changeSymbol} symbol={this.state.symbol} startNewGame={this.startNewGame}
          isRunGame={this.state.isRunGame} changeLang={this.changeLang} resize={this.resize} size={this.state.size}/>
        <Stats text={this.state.text} moves={this.state.moves} freeCells={this.state.freeCells} isRunGame={this.state.isRunGame}/>
        <Chart isRunGame={this.state.isRunGame} symbol={this.state.symbol} moved={this.moved} chartTable={this.state.chartTable}
          mouseClick={this.mouseClick}/>
      </div>
    );
  }
}
