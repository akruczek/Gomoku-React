import React from 'react';
import {chartSize} from './../variables/chart.jsx';

export class Chart extends React.Component {

  render() {
    return (
      <div className="chart" style={{height: "300px"}}>
          {chartSize[0].map(itemHeight => {
            return <div key={itemHeight} className="chartRow">{
            chartSize[1].map(itemWidth => {
              return (
                <div key={itemWidth} id={String(itemHeight) + "-" + String(itemWidth)} onClick={event => this.props.mouseClick(event)}
                    className="chartCell">
                  <img className="symbol"
                    src={this.props.chartTable[itemHeight][itemWidth].indexOf("-") > -1 ? (
                      ""
                    ) : (
                      this.props.chartTable[itemHeight][itemWidth] === "circle" ?
                      ( "./../../images/circle.png" ) : ( "./../../images/cross.png" )
                  )}/>
                </div>
              );
            })}</div>;
          })}
      </div>
    );
  }
}
