import React from 'react';
import {chartSize, chartTable} from './../variables/chart.jsx';

export class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chartTable}
  }

  mouseClick =(event)=> {
    console.log("Clicked field ID:", event.target.id);
  }

  render() {
    console.log(this.state.chartTable);
    return (
      <div className="chart" style={{height: "300px"}}>
          {chartSize[0].map(itemHeight => {
            return <div key={itemHeight} className="chartRow">{
            chartSize[1].map(itemWidth => {
              return <div key={itemWidth} id={String(itemHeight) + "-" + String(itemWidth)}
                onClick={event => this.mouseClick(event)}
                className="chartCell"></div>;
            })
          }</div>;
          })}
      </div>
    );
  }
}
