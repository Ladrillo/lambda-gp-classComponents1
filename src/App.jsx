import React from 'react';
import ReactDOM from 'react-dom';
import { ContainerClassy, ContainerFunctional } from './components/Container';
import './App.less';


ReactDOM.render(
  <>
    <ContainerClassy />
    <ContainerFunctional />
  </>,
  document.querySelector('#target1'),
);
