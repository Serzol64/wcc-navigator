/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { BuyListService } from '../../services/buys/Buy';

export class Buy extends React.Component{
	render(): JSX.Element{
		//const buysListFeed = new BuyListService({ event: "currentList", type: null }).eventStart().then(this.renderList);
		return (
				<React.Fragment>
					<div className='listGrid' id='buys'>
						<ul id="cards">
							<li>
								<img src="https://images.av.ru/av.ru/product/h04/h26/8845638238238.jpg" />
								<span>2 бутылки молока</span>
								<strong>{ 114 * 2 + ' ₽' }</strong>
								<button>В корзину</button>
							</li>
							<li>
								<img src="https://images.av.ru/av.ru/product/h04/h26/8845638238238.jpg" />
								<span>2 бутылки молока</span>
								<strong>{ 114 * 2 + ' ₽' }</strong>
								<button>В корзину</button>
							</li>
							<li>
								<img src="https://images.av.ru/av.ru/product/h04/h26/8845638238238.jpg" />
								<span>2 бутылки молока</span>
								<strong>{ 114 * 2 + ' ₽' }</strong>
								<button>В корзину</button>
							</li>
						</ul>
					</div>
				</React.Fragment>
		);
		
		
	}
	
}
