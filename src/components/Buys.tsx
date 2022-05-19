import React from "react";
import { Buy } from '../pages/buys/buy';
import { CartGrid } from '../pages/buys/cart';
import { BuysFeed } from '../handlers/buys/Feed';
import './styles/buys.css';

export class Buys extends React.Component{
  render(): JSX.Element{
	  return (
		<React.Fragment>
			<div id="buysList">
			  <header>В корзине</header>
			  <main><CartGrid style={new BuysFeed('ui-change', 0).eventStart()} /></main>
			</div>
			<div id="buysList">
			  <header>Надо купить</header>
			  <main><Buy style={new BuysFeed('ui-change', 1).eventStart()} /></main>
			</div>
		</React.Fragment>
	  );
  }
}
