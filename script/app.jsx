import React from 'react';
import ReactDOM from 'react-dom';
import {HeadNavbar} from './components/HeadNavbar.jsx';
import {Chart} from './components/Chart.jsx';
import {chartTable, chartCellsNumber} from './variables/chart.jsx';
import {Stats} from './components/Stats.jsx';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunGame: false,
      symbol: true,  //true - GREEN CIRCLE, false - RED CROSS
      moves: 0,
      freeCells: 0
    }
  }

  changeSymbol =(event)=> {
    !this.state.isRunGame && this.setState({ symbol: !this.state.symbol });
    event.preventDefault();
  }

  startNewGame =(event)=> {
    this.setState({
      isRunGame: !this.state.isRunGame,
      moves: 0,
      freeCells: this.state.isRunGame ? 0 : chartCellsNumber
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <HeadNavbar changeSymbol={this.changeSymbol} symbol={this.state.symbol} startNewGame={this.startNewGame}
          isRunGame={this.state.isRunGame}/>
        <Stats moves={this.state.moves} freeCells={this.state.freeCells} isRunGame={this.state.isRunGame}/>
        <Chart/>
      </div>
    );
  }
}
