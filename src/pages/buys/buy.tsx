/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { BuyListService } from '../../services/buys/Buy';

export class Buy extends React.Component<{ style?: any }>{
	componentDidMount(): void{
		$(() => {
			
		});
	}
	render(): JSX.Element{
		const buysListFeed = new BuyListService({ event: "currentList", type: null }).eventStart().map(({response}: {response : any}) => {
			(
				<li style={this.props.style.cardBuy}>
					<img src={ response.Image } style={this.props.style.productImage}/>
					<span style={this.props.style.buyTitle}>{ response.Title }</span>
					<strong style={this.props.style.buyPrice}>{ response.Cost }</strong>
					<button style={this.props.style.buyAction}>В корзину</button>
				</li>
			)
		});
		return (
			<React.Fragment>
				<div className='listGrid' id='buys'>
					<ul id="cards">{ buysListFeed }</ul>
				</div>
			</React.Fragment>
		);
	}
	
}
