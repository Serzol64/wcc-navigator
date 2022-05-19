import { IHandlerControl } from "../ControlInterface";

export class BuysFeed{
    buysFeed: { screenEvent: any; eventType: any; };

    constructor(event: any,type: any){
        this.buysFeed = {
            screenEvent: event,
            eventType: type
        }
    }
    screenEvent: string | undefined;
    eventType: number | undefined;

    protected handlerFeed(event : IHandlerControl){
        if(event.screenEvent === 'ui-change'){
            type buysCard = {
                productImage: any
            };

            if(event.eventType == 0){
               type cartUI = {
                    cardCart: any,
                    cartTitle: any,
                    cartPrice: any
               };
               return <buysCard><unknown><cartUI>{
                   cardCart: {},
                   productImage: {},
                   cartTitle: {},
                   cartPrice: {}
               };
            }
            if(event.eventType == 1){
                type buysUI = {
                    cardBuy: any,
                    buyTitle: any,
                    buyPrice: any
               };
                return  <buysCard><unknown><buysUI>{
                    cardBuy: {},
                    productImage: {},
                    buyTitle: {},
                    buyPrice: {}
                }
            }

        }
    }

    public eventStart(){
        return this.handlerFeed(this.buysFeed);
    }
}
