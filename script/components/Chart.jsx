import React from 'react';
import {chartSize, chartTable} from './../variables/chart.jsx';

export class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chartTable}
  }

  mouseClick =(event)=> {
    let x = Number(event.target.id.split("-")[0]);
    let y = Number(event.target.id.split("-")[1]);
    if (this.props.isRunGame && event.target.className !== "symbol") {
      console.log(x, y);
      let newChartTable = this.state.chartTable;
      newChartTable[x][y] = this.props.symbol ? "circle" : "cross";
      this.setState({ chartTable: newChartTable });
      this.props.moved();
    }
  }

  render() {
    console.log(this.state.chartTable);
    return (
      <div className="chart" style={{height: "300px"}}>
          {chartSize[0].map(itemHeight => {
            return <div key={itemHeight} className="chartRow">{
            chartSize[1].map(itemWidth => {
              console.log(this.state.chartTable[itemHeight][itemWidth].indexOf("-") > -1);
              return (
                <div key={itemWidth} id={String(itemHeight) + "-" + String(itemWidth)} onClick={event => this.mouseClick(event)}
                    className="chartCell">
                  <img className="symbol"
                    src={this.state.chartTable[itemHeight][itemWidth].indexOf("-") > -1 ? (
                      ""
                    ) : (
                      this.state.chartTable[itemHeight][itemWidth] === "circle" ?
                      ( "./../../images/circle.png" ) : ( "./../../images/cross.png" )
                  )}/>
                </div>
              );
            })
          }</div>;
          })}
      </div>
    );
  }
}
