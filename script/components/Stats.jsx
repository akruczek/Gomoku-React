import React from 'react';

export class Stats extends React.Component {
  render() {
    return (
      <section className="stats">
        <div className="moves">
          <img src="./../../images/moves.png"/>
          <h3>{this.props.text.Moves}: {this.props.moves}</h3>
        </div>

        {this.props.isRunGame &&
        <div>
          <h3 className="description">{this.props.text.Get_5_in_a_row_first}</h3>
        </div>}

        <div className="freeCells">
          <img src="./../../images/freeCells.png"/>
          <h3>{this.props.text.Free_Cells}: {this.props.freeCells}</h3>
        </div>
      </section>
    );
  }
}
