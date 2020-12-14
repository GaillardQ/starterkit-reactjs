// React libs
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// UI
import App from './Pages/AppScene';
// Worker
import * as serviceWorker from './serviceWorker';
// CSS
import './Resources/assets/css/main.css';

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    root
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
