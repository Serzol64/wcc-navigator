/* eslint-disable @typescript-eslint/no-unused-vars */
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite';
import { IServiceControl } from "../../handlers/ControlInterface";
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

    protected serviceFeed({ event }: { event: IServiceControl; }): any{
		switch(event.svc){
			case "currentCart":
				SQLite.create({ name: '../../data/buy.sql', location: 'default' }).then(async (db: SQLiteObject) => {
                    await db.transaction((tx) => {
                        tx.executeSql('SELECT * FROM cart', [], (rs: { rows: {}; }) => { 
                            console.log(rs.rows);
                            return rs.rows; 
                        });
                    });
                });
                break;
			default: 
                return null;
		}
    }
    public eventStart(){
        return this.serviceFeed({ event: this.buysCardFEED });
    }

}
