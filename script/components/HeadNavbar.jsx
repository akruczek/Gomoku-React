import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

export const HeadNavbar =(props)=> {
  return (
    <Navbar brand='Gomoku-React' left className="HeadNavbar">
      <NavItem className="translationIcon" onClick={props.changeLang}>
        <img src="./../../images/translation.png"/>
      </NavItem>

    	<NavItem onClick={props.startNewGame}>
        <span style={{color: props.isRunGame ? "rgba(250,0,0,0.75)" : "rgba(0,250,0,.5)"}}>{props.isRunGame ? "Stop Game" : props.text.Start_New_Game}</span>
      </NavItem>

    	<NavItem onClick={props.changeSymbol}>{props.text.Change_Symbol}:
        <span className="symbolIcon"><img src={props.symbol ? "./../../images/circle.png" : "./../../images/cross.png"} /></span>
      </NavItem>

      <NavItem className="resizeIcon" onClick={props.resize}>
        <img src="./../../images/size.png"/>
        <span>{props.size === 3 ? props.text.Large : (props.size === 2 ? props.text.Medium : props.text.Small)}</span>
      </NavItem>
    </Navbar>
  );
}
