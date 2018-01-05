import React from 'react';
import {chartSize} from './../variables/chart.jsx';

export class Chart extends React.Component {
  render() {
    return (
      <table className="chartTable" style={{height: "300px"}}>
        <tbody className="chartTableBody">
          {chartSize[0].map(itemHeight => {
            return <tr key={itemHeight} className="chartTableRow">{
            chartSize[1].map(itemWidth => {
              return <td key={itemWidth} id={String(itemHeight) + "-" + String(itemWidth)} className="chartTableCell"></td>
            })
            }</tr>
          })}
        </tbody>
      </table>
    );
  }
}
