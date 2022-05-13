import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { IServiceControl } from "../../handlers/ControlInterface";

export class BuyListService{
    buyService: IServiceControl;

    constructor({ event, type }: { event: any; type: any; }){
        this.buyService = {
            svc: event,
            query: type,
            _dataConnector: this.DBInit()
        }
    }
    svc: string | undefined;
    query: string | undefined;

    protected serviceList(event : IServiceControl){
		switch(event.svc){
			case "currentList":
				let products = event._dataConnector.get('SELECT * FROM buys');

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
        return this.serviceList(this.buyService);
    }

}
