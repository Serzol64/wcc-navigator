import React from "react";
import { YMaps, Map, ZoomControl, TrafficControl, GeolocationControl } from 'react-yandex-maps';
import './styles/navigator.css';

export class Navigator extends React.Component{
  render(){
	  return (
		  <React.Fragment>
			 <YMaps>
				<Map defaultState={{ controls: [], center: [51.533103, 46.034158], zoom: 12 }} width={"100%"} height={"100%"}>
					<ZoomControl options={{ float: 'right' }} />
					<TrafficControl options={{ float: 'right' }} />
					<GeolocationControl options={{ float: 'left' }} />
				</Map>
			 </YMaps>
		  </React.Fragment>
	  );
  }
}
