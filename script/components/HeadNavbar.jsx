import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

export const HeadNavbar =(props)=> {
  return (
    <Navbar brand='Gomoku-React' left className="HeadNavbar">
    	<NavItem onClick={props.startNewGame}>
        <span style={{color: props.isRunGame ? "rgba(250,0,0,0.75)" : "rgba(0,250,0,.5)"}}>{props.isRunGame ? "Stop Game" : "Start New Game"}</span>
      </NavItem>
    	<NavItem onClick={props.changeSymbol}>Change Symbol:
        <span className="symbolIcon"><img src={props.symbol ? "./../../images/circle.png" : "./../../images/cross.png"} /></span>
      </NavItem>
    </Navbar>
  );
}
