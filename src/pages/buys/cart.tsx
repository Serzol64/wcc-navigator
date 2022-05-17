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
						<li>
							
						</li>
					</ul>
				</div>
				<footer className='summary'>
					Стоимость товаров в корзине:<strong></strong>
				</footer>
			</React.Fragment>
		);
	}
}

const smartList = new BuysCartFeedService({ event: "currentCart", type: null }).eventStart();
