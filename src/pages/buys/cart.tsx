/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { BuysCartFeedService } from '../../services/buys/Cart';

export class CartGrid extends React.Component{
	render(): JSX.Element{
		//const cartListFeed = new BuysCartFeedService({ event: "currentCart", type: null }).eventStart().then(this.renderList);
		
		return (
				<React.Fragment>
					<div className='listGrid' id='cart'>
						<ul id="cards">
							<li>
								<img src="https://images.av.ru/av.ru/product/h2f/h6d/8843817877534.jpg" />
								<span>Буханка Деревенского</span>
								<strong>{ 423 + ' ₽' }</strong>
								<button>Куплено</button>
							</li>
							<li>
								<img src="https://images.av.ru/av.ru/product/h2f/h6d/8843817877534.jpg" />
								<span>Буханка Деревенского</span>
								<strong>{ 423 + ' ₽' }</strong>
								<button>Куплено</button>
							</li>
						</ul>
					</div>
					<footer className='summary'>
						Стоимость товаров в корзине:<strong> 423 ₽</strong>
					</footer>
				</React.Fragment>
		);
		
	}
}

