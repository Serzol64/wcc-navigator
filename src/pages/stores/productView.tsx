import * as React from 'react';
import { ProductPage } from '../../handlers/stores/pages/Product';

export class CPScreen extends React.Component{
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

const pageStyle = new ProductPage('ui-change',0).eventStart(),
      screenStyle = new ProductPage('ui-change',1).eventStart();
