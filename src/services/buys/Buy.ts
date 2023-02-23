// eslint-disable-next-line

import { Storage } from '@ionic/storage';
import { IServiceControl, IBuyList } from "../../handlers/ControlInterface";

export class BuyListService{
    buyService: IServiceControl;

    constructor({ event, type }: { event: any; type: any; }){
        this.buyService = {
            svc: event,
            query: type
        }
    }
    svc: string | undefined;
    query: string | undefined;

    protected async serviceList({ event }: { event: IServiceControl; }): Promise<any>{
		switch(event.svc){
			case "currentList":
				const storage = new Storage();
				let listResponse = {};
				const readyList: IBuyList[] = [
									{
										image: 'https://images.av.ru/av.ru/product/h04/h26/8845638238238.jpg',
										title: '2 бутылки молока',
										cost: 114 * 2 + ' ₽'
									},
									{
										image: 'https://images.av.ru/av.ru/product/h68/h26/9441087356958.jpg',
										title: '2 десятка яиц',
										cost: 216 * 2 + ' ₽'
									},
									{
										image: 'https://images.av.ru/av.ru/product/h2f/h6d/8843817877534.jpg',
										title: 'Буханка Деревенского',
										cost: 423 + ' ₽'
									},
									{
										image: 'https://images.av.ru/av.ru/product/h14/hca/9004606095390.jpg',
										title: '2 кг говядины',
										cost: 100.2 * 2000 + ' ₽'
									}
					];
					
			
				if(await storage.get('buy')){ listResponse = await storage.get('buy'); }
				else{
					await storage.create();
					await storage.set('buy', readyList);
					listResponse = await storage.get('buy');
				}
				
				console.log(listResponse);
				return listResponse;
            break;
			default: return null;	}
    }
    public eventStart(): any{
        return this.serviceList({ event: this.buyService });
    }

}
