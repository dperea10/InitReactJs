import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Cards from './components/Cards'

const container = document.getElementById('root')

background: url('/assets/images/img1.png') no-repeat, linear-gradient(to right, #67626b, #6779d3);
ReactDOM.render(<Cards
                      title="Desarrollo Web"
                      description="Diseño y desarrollo web"
                      img = ""



        />, container)
