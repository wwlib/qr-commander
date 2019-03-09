import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Model from './model/Model';

let model: Model = new Model();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App model={model}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
