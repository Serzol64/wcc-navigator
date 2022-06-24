/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable eqeqeq */
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
                    cartPrice: any,
                    cartAction: any
               };
               return <buysCard><unknown><cartUI>{
                   cardCart: {
                        width: '',
                        height: '',
                        padding: 0,
                        marginLeft: 0,
                        backgroundColor: ''
                   },
                   productImage: {
                        marginTop: 0 * 1.5,
                        marginLeft: 1 * 2,
                        width: '',
                        height: '',
                        objectFit: 'contain',
                        float: 'left'
                   },
                   cartTitle: {
                        color: '',
                        fontSize: 0,
                        marginTop: 1 * 2,
                        marginLeft: 1 * 2,
                        float: 'left'
                   },
                   cartPrice: {
                        color: '',
                        fontSize: 0,
                        marginTop: 1 * 2,
                        marginRight: 1 * 2,
                        float: 'right'
                   },
                   cartAction: {
                        padding: 0,
                        fontSize: 0,
                        color: 'white',
                        backgroundColor: '',
                        width: 0
                   }
               };
            }
            if(event.eventType == 1){
                type buysUI = {
                    cardBuy: any,
                    buyTitle: any,
                    buyPrice: any,
                    buyAction: any
               };
                return  <buysCard><unknown><buysUI>{
                    cardBuy: {
                        width: '',
                        height: '',
                        padding: 0,
                        marginLeft: 0,
                        backgroundColor: ''
                    },
                    productImage: {
                        marginTop: 0 * 1.5,
                        marginLeft: 1 * 2,
                        width: '',
                        height: '',
                        objectFit: 'contain',
                        float: 'left'
                    },
                    buyTitle: {
                        color: '',
                        fontSize: 0,
                        marginTop: 1 * 2,
                        marginLeft: 1 * 2,
                        float: 'left'
                    },
                    buyPrice: {
                        color: '',
                        fontSize: 0,
                        marginTop: 1 * 2,
                        marginLeft: 1 * 2,
                        float: 'left'
                    },
                    buyAction: {
                        padding: 0,
                        fontSize: 0,
                        color: 'white',
                        backgroundColor: '',
                        width: 0
                    }
                }
            }

        }
    }

    public eventStart(){
        return this.handlerFeed(this.buysFeed);
    }
}
