/* eslint-disable @typescript-eslint/no-unused-vars */
import { Storage } from '@ionic/storage';
import { IServiceControl, IBuyList } from "../../handlers/ControlInterface";

export class BuysCartFeedService{
    buysCardFEED: IServiceControl;

    constructor({ event, type }: { event: any; type: any; }){
        this.buysCardFEED = {
            svc: event,
            query: type
        }
    }
    svc: string | undefined;
    query: any | undefined;

    protected async serviceFeed({ event }: { event: IServiceControl; }): Promise<any>{
		switch(event.svc){
			case "currentCart":
				const storage = new Storage();
				let listResponse: IBuyList[] = await storage.get('cart');
				
				console.log(listResponse);
				return listResponse;
            break;
			default: 
                return null;
		}
    }
    public eventStart(){
        return this.serviceFeed({ event: this.buysCardFEED });
    }

}
