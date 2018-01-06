import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

export const HeadNavbar =(props)=> {
  return (
    <Navbar brand='Gomoku-React' left className="HeadNavbar">
    	<NavItem onClick={props.startNewGame}>Start New Game</NavItem>
    	<NavItem onClick={props.changeSymbol}>Change Symbol:
        <span className="symbolIcon"><img src={props.symbol ? "./../../images/circle.png" : "./../../images/cross.png"} /></span>
      </NavItem>
    </Navbar>
  );
}
