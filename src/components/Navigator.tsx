import React from "react";
import { YMaps, Map, ZoomControl, TrafficControl, SearchControl, Button, RouteButton } from 'react-yandex-maps';
import './styles/navigator.css';

export class Navigator extends React.Component{
  serviceButtonSize(buttonNum : number) : object{
	  return { 
		  maxWidth: 300,
		  position: {
			  bottom: 50,
			  left: buttonNum === 1 ? '40vw' : buttonNum === 2 ? '85vw' : '5vw'
		  }
	  };
  }
  serviceButtonMeta(buttonNum : number) : object{
	  return { 
		  content: buttonNum === 1 ? 'Магазины и аптеки рядом со мной' : buttonNum === 2 ? 'Спросить у близких' : 'Прямо сейчас на улице',
		  image: buttonNum === 1 ? 'https://img.icons8.com/fluency/24/null/shop.png' : buttonNum === 2 ? 'https://img.icons8.com/fluency/24/null/question.png' : 'https://img.icons8.com/fluency/24/000000/clouds.png'
	  };
  }
  render(){
	  return (
		  <React.Fragment>
			 <YMaps>
				<Map defaultState={{ controls: [], center: [51.533103, 46.034158], zoom: 12 }} width={"100%"} height={"100%"}>
					<ZoomControl options={{ float: 'right' }} />
					<RouteButton options={{ float: 'left' }} />
					<TrafficControl options={{ float: 'left' }} />
					<SearchControl options={{ float: 'right', kind: 'house', fitMaxWidth: true, searchControlMaxWidth: [30, 72, 500], provider: 'yandex#map', searchCoordOrder: '51.533103, 46.034158', noPlacemark: true }} />
					<Button options={ this.serviceButtonSize(0) } data={ this.serviceButtonMeta(0) } />
					<Button options={ this.serviceButtonSize(1) } data={ this.serviceButtonMeta(1) } />
					<Button options={ this.serviceButtonSize(2) } data={ this.serviceButtonMeta(2) } />
				</Map>
			 </YMaps>
		  </React.Fragment>
	  );
  }
}
