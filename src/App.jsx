import React from 'react';
import ReactDOM from 'react-dom';
import { ContainerClassy, ContainerFunctional } from './components/Container';
import './App.less';

ReactDOM.render(
  <ContainerClassy />,
  document.querySelector('#target1'),
);

ReactDOM.render(
  <ContainerFunctional />,
  document.querySelector('#target2'),
);
