import React from 'react';
import ReactDOM from 'react-dom';
import {HeadNavbar} from './components/HeadNavbar.jsx';
import {Chart} from './components/Chart.jsx';
import {chartTable} from './variables/chart.jsx';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: true  //true - GREEN CIRCLE, false - RED CROSS
    }
  }

  changeSymbol =(event)=> {
    this.setState({ symbol: !this.state.symbol });
    event.preventDefault();
  }

  startNewGame =()=> {

  }

  render() {
    return (
      <div className="App">
        <HeadNavbar changeSymbol={this.changeSymbol} symbol={this.state.symbol} startNewGame={this.startNewGame}/>
        <Chart/>
      </div>
    );
  }
}
