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
		return (
			<React.Fragment>
				<div className='listGrid' id='cart'>
					<ul id="cards">
						<li style={this.props.style.cardCart}>
							<img src={ this.blobToFile(smartList.Image) } style={this.props.style.productImage}/>
							<span style={this.props.style.cartTitle}>{ smartList.Title }</span>
							<strong style={this.props.style.cartPrice}>{ smartList.Cost }</strong>
							<button style={this.props.style.cartAction}>Куплено</button>
						</li>
					</ul>
				</div>
				<footer className='summary'>
					Стоимость товаров в корзине:<strong></strong>
				</footer>
			</React.Fragment>
		);
	}
	blobToFile(query: any) : any{
		var reader = new FileReader();
		reader.readAsDataURL(query);
		reader.onloadend = () => {
			var base64data = reader.result;
			return base64data;
		}
	}
}

const smartList = new BuysCartFeedService({ event: "currentCart", type: null }).eventStart();
