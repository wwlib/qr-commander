import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Model from './model/Model';

console.log(`process.env: `, process.env);
if (process.env.REACT_APP_MODE == 'electron') {
    console.log(`Running in Electron: Filesystem access is enabled.`)
}

let model: Model = new Model();

ReactDOM.render(<App model={model}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();