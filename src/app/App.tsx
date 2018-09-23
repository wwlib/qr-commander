import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './components/Application';
import Model from './model/Model';
declare let module: any

import './css/app.css';

let model: Model = new Model();
ReactDOM.render(<Application model={model}/>,
document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
