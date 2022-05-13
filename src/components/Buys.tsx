import React from "react";
import { Buy } from '../pages/buys/buy';
import { CartGrid } from '../pages/buys/cart';
import { BuysFeed } from '../handlers/buys/Feed';
import './styles/buys.css';

export class Buys extends React.Component{
  styleGenerator(t : bool){
	  let call : any | undefined;
	  
	  if(t){ call = new BuysFeed('ui-change', 1).eventStart(); }
	  else{ call = new BuysFeed('ui-change', 0).eventStart(); }
	  
	  return call;
  }
  render(){
	  return (
		<React.Fragment>
			<div id="buysList">
			  <header>В корзине</header>
			  <main><CartGrid style={this.styleGenerator(false)} /></main>
			</div>
			<div id="buysList">
			  <header>Надо купить</header>
			  <main><Buy style={this.styleGenerator(true)} /></main>
			</div>
		</React.Fragment>
	  );
  }
}
