import React from 'react';
import ReactDOM from 'react-dom';
import	{Router}	from 'react-router';
import {BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import {HeadNavbar} from './components/HeadNavbar.jsx';
import {Chart} from './components/Chart.jsx';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeadNavbar/>
        <Chart/>
      </div>
    );
  }
}
