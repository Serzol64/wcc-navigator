import { IHandlerControl } from "../../ControlInterface";

export class ProductPage{
    CP: any;
    constructor(event: any,type: any){
        this.CP = {
            screenEvent: event,
            eventType: type
        }
    }

    protected handlerFeed(event : IHandlerControl){
        if(event.screenEvent === 'ui-change'){

            if(event.eventType == 0){
                //Нулевое значение - это то, чего касается первоначальных элементов и компонентов

               
            }
            if(event.eventType == 1){
                
            }

        }
    }

    public eventStart(){
        return this.handlerFeed(this.CP);
    }
}
