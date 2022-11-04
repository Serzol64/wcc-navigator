import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite';
import { IServiceControl } from "../../handlers/ControlInterface";

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

    protected serviceList({ event }: { event: IServiceControl; }): any{
		switch(event.svc){
			case "currentList":
				SQLite.create({ name: 'buy.sql', location: '../../data/' }).then(async (db: SQLiteObject) => {
                    await db.transaction((tx) => {
                        tx.executeSql('SELECT * FROM buys', [], (rs: { rows: {}; }) => { return rs.rows; });
                    });
                });
                break;
			default: return null;	}
    }
    public eventStart(){
        return this.serviceList({ event: this.buyService });
    }

}
