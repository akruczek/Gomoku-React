import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

export const HeadNavbar =(props)=> {
  return (
    <Navbar brand='Gomoku-React' left className="HeadNavbar">
    	<NavItem>Start New Game</NavItem>
    	<NavItem>Select icon</NavItem>
    </Navbar>
  );
}
