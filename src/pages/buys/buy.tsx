import * as React from 'react';
import { BuyListService } from '../../services/buys/Buy';

export class Buy extends React.Component{
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
				<div className='listGrid' id='buys'>
					<ul id="cards">
						<li>

						</li>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

const smartList = new BuyListService({ event: "currentList", type: null }).eventStart();
