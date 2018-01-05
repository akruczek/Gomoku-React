import "../style/main.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app.jsx';

//-----SCRIPT-----\\
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
