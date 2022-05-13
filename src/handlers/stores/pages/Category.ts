import { IHandlerControl } from "../../ControlInterface";

export class CategoryPage{
    CC: any;
    constructor(event: any,type: any){
        this.CC = {
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
        return this.handlerFeed(this.CC);
    }
}
