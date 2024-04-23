import React from 'react';
import LogoPizza from '../assets/pizza-logo.svg';
import {Button} from './index';

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={LogoPizza} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
}
