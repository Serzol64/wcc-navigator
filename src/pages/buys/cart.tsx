import * as React from 'react';
import $ from 'jquery';
import { BuysCartFeedService } from '../../services/buys/Cart';

export class CartGrid extends React.Component{
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor({ props }: { props: {} | Readonly<{}>; }){
		super(props);
	}
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
							<img src={ this.blobToFile(response.Image) } style={this.props.style.productImage}/>
							<span style={this.props.style.cartTitle}>{ response.Title }</span>
							<strong style={this.props.style.cartPrice}>{ response.Cost }</strong>
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
	blobToFile({query}: {query: any}) : void{
		var reader = new FileReader();
		reader.readAsDataURL(query);
		reader.onloadend = () => {
			var base64data = reader.result;
			return base64data;
		}
	}
}

const smartList = new BuysCartFeedService({ event: "currentCart", type: null }).eventStart();
