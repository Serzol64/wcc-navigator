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

            if(event.eventType == 0){
                //Нулевое значение - это то, чего касается первоначальных элементов и компонентов
                type Style = {
                    feedTitle: TextStyle,
                    listTitle: TextStyle,
                    CLCont: TextStyle,
                    BLTitle: TextStyle,
                    CLTitle: TextStyle,
                    IconMain: ImageStyle,
					BLIconOne: ImageStyle,
					CLIconOne: ImageStyle
                };
                return StyleSheet.create<Style>({
                    feedTitle: {
                        textAlign: 'left',
                        color: '#018574',
                        fontSize: 35,
                        fontWeight: 'bold',
                        marginLeft: 1,
                        paddingTop: 1,
                        paddingBottom: 1
                    },
                    listTitle: {
                        textAlign: 'left',
                        color: '#038387',
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginLeft: 1,
                        paddingTop: 1,
                        paddingBottom: 1
                    },
					BLTitle: {
						fontSize: 22,
						fontWeight: '600',
						color: 'red',
						padding: 2,
						display: 'flex',
						marginTop: 1,
						marginLeft: 2
					},
					CLTitle: {
						fontSize: 22,
						fontWeight: '800',
						backgroundColor: 'green',
						color: 'white',
						padding: 1,
						display: 'flex',
						marginTop: 1,
						marginLeft: 2
					},
					BLIconOne: {fontSize: 60, marginRight: 1},
					CLIconOne: {fontSize: 60, marginRight: 1}
                });
            }
            if(event.eventType == 1){
                //Первичное значение - это касается основных и остальных компонентов.

                type ContStyle = {
                    feed: ViewStyle,
                    list: ViewStyle
                };

                return StyleSheet.create<ContStyle>({
                    feed: {
                        flex: 1,
                        paddingTop: 2,
                        paddingBottom: 2
                    },
                    list: {
                        flex: 1,
                        paddingTop: 2,
                        paddingBottom: 2
                    }
                });



            }

        }
    }

    public eventStart(){
        return this.handlerFeed(this.buysFeed);
    }
}
