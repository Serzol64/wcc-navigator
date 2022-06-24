/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import $ from 'jquery';
import { BuysCartFeedService } from '../../services/buys/Cart';

export class CartGrid extends React.Component<{ style?: any }>{
	componentDidMount(): void{
		$(() => {
			
		});
	}
	render(): JSX.Element{
		const cartListFeed = new BuysCartFeedService({ event: "currentCart", type: null }).eventStart().map(({response}: {response : any}) => {
			(
				<li style={this.props.style.cardCart}>
					<img src={ response.Image } style={this.props.style.productImage}/>
					<span style={this.props.style.cartTitle}>{ response.Title }</span>
					<strong style={this.props.style.cartPrice}>{ response.Cost }</strong>
					<button style={this.props.style.cartAction}>Куплено</button>
				</li>
			)
		});

		return (
			<React.Fragment>
				<div className='listGrid' id='cart'>
					<ul id="cards">{ cartListFeed }</ul>
				</div>
				<footer className='summary'>
					Стоимость товаров в корзине:<strong></strong>
				</footer>
			</React.Fragment>
		);
	}
}

