import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { IServiceControl } from "../../handlers/ControlInterface";

export class BuysCartFeedService{
    buysCardFEED: IServiceControl;

    constructor({ event, type }: { event: any; type: any; }){
        this.buysCardFEED = {
            svc: event,
            query: type,
            _dataConnector: this.DBInit()
        }
    }
    svc: string | undefined;
    query: string | undefined;

    protected serviceFeed(event : IServiceControl){
		switch(event.svc){
			case "currentCart":
				let products = event._dataConnector.get('SELECT * FROM cart');

				return products;
			default: return null;		}
    }
    private async DBInit(){
        return await open({
            filename: '../data/buy.sql',
            driver: sqlite3.Database
        });
    }
    public eventStart(){
        return this.serviceFeed(this.buysCardFEED);
    }

}
