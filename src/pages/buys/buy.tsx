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
		const buysListFeed = smartList.map(({response}: {response : any}) => {
			(
				<li style={this.props.cardBuy}>
					<img src={ this.blobToFile(response.Image) } style={this.props.productImage}/>
					<span style={this.props.buyTitle}>{ response.Title }</span>
					<strong style={this.props.buyPrice}>{ response.Cost }</strong>
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
	blobToFile({query}: {query: any}) : string{
		var reader = new FileReader();
		reader.readAsDataURL(query);
		reader.onloadend = () => {
			var base64data = reader.result;
			return base64data;
		}
	}
}

const smartList = new BuyListService({ event: "currentList", type: null }).eventStart();
