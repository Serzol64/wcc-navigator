import React from "react";
import { Buy } from '../pages/buys/buy';
import { CartGrid } from '../pages/buys/cart';
import './styles/buys.css';

export class Buys extends React.Component{
  render(): JSX.Element{
	  return (
		<React.Fragment>
			<div id="buysList">
			  <header>В корзине</header>
			  <main><CartGrid /></main>
			</div>
			<div id="buysList">
			  <header>Надо купить</header>
			  <main><Buy /></main>
			</div>
		</React.Fragment>
	  );
  }
}
