import * as React from 'react';
import { BuysCartFeedService } from '../../services/buys/Cart';

export class CartGrid extends React.Component{
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor({ props }: { props: {} | Readonly<{}>; }){
		super(props);
	}
	render(): JSX.Element{
		return (
			<React.Fragment>
				
			</React.Fragment>
		);
	}
}

const smartList = new BuysCartFeedService({ event: "currentCart", type: null }).eventStart();
