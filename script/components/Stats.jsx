import React from 'react';

export class Stats extends React.Component {
  render() {
    return (
      <section className="stats">
        <div className="moves">
          <img src="./../../images/moves.png"/>
          <h3>Moves: {this.props.moves}</h3>
        </div>

        {this.props.isRunGame &&
        <div>
          <h3>Get 5 in a row first!</h3>
        </div>}

        <div className="freeCells">
          <img src="./../../images/freeCells.png"/>
          <h3>Free Cells: {this.props.freeCells}</h3>
        </div>
      </section>
    );
  }
}
