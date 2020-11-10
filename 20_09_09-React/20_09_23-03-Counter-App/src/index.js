import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';

import './index.css'

const divRoot = document.querySelector('#app');

ReactDOM.render(<PrimeraApp saludo="Hola, Soy Francisco"/>, divRoot); //** Al dejarla con el /> queda claro que es un functional component */
// ReactDOM.render(<CounterApp value={10} />, divRoot);