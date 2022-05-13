import * as React from 'react';
import { CategoryPage } from '../../handlers/stores/pages/Category';

export class CCScreen extends React.Component{
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

const pageStyle = new CategoryPage('ui-change',0).eventStart(),
      screenStyle = new CategoryPage('ui-change',1).eventStart();
