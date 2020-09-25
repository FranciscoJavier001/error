import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css'

const divRoot = document.querySelector('#app');

ReactDOM.render(<CounterApp frase1={123} frase2="Prueba" />, divRoot);