/* eslint-disable eqeqeq */
import { IHandlerControl } from "../../ControlInterface";

export class StoresFeed{
    storesFeed: any;
    constructor(event: any,type: any){
        this.storesFeed = {
            screenEvent: event,
            eventType: type
        }
    }

    protected handlerFeed(event : IHandlerControl){
        if(event.screenEvent === 'ui-change'){

            if(event.eventType == 0){
               return {
                   
               };

               
            }
            if(event.eventType == 1){
               return {

               };
            }

        }
        if(event.screenEvent === 'clicker'){
			switch(event.eventType){
				case 0:
				break;
				case 1:
				break;
			}
		}
    }

    public eventStart(){
        return this.handlerFeed(this.storesFeed);
    }
}
