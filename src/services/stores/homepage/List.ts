import { IServiceControl } from "../../../handlers/ControlInterface";

export class StoreListService{
    storeService: { svc: any; query: any; };

    constructor(event: any,type: any){
        this.storeService = {
            svc: event,
            query: type
        }
    }
    svc: string | undefined;
    query: string | undefined;

    protected serviceList(event : IServiceControl){
		switch(event.svc){
			case "categories":
				let list = [
					 {
					   ID: 1,
					   Category: "Молочные продукты"
					 },
					 {
					   ID: 2,
					   Category: "Хлебобулочные изделия"
					 },
					 {
					   ID: 3,
					   Category: "Мясные дилекатесы"
					 },
					 {
					   ID: 4,
					   Category: "Сырные дилекатесы"
					 },
					 {
					   ID: 5,
					   Category: "Сладости"
					 },
					 {
					   ID: 6,
					   Category: "Мясная продукция"
					 },
					 {
					   ID: 7,
					   Category: "Рыбная продукция"
					 },
					 {
					   ID: 8,
					   Category: "Бытовая химия"
					 },
					 {
					   ID: 9,
					   Category: "Фрукты и овощи"
					 },
					 {
					   ID: 10,
					   Category: "Чай и напитки"
					 }
				];

				return list;
			case "currentCategory":
					let products = [
						 {
						   ID: 1,
						   CatID: 1,
						   Product: "Молоко в бутылке"
						 },
						 {
						   ID: 2,
						   CatID: 2,
						   Product: "Нарезной батон"
						 },
						 {
						   ID: 3,
						   CatID: 3,
						   Product: "Докторская колбаса"
						 },
						 {
						   ID: 4,
						   CatID: 5,
						   Product: "Мороженное"
						 },
						 {
						   ID: 5,
						   CatID: 7,
						   Product: "Слабосолёная селёдка"
						 },
						 {
						   ID: 6,
						   CatID: 3,
						   Product: "Молочные сосиски"
						 },
						 {
						   ID: 7,
						   CatID: 9,
						   Product: "Яблоки"
						 },
						 {
						   ID: 8,
						   CatID: 9,
						   Product: "Огурцы"
						 },
						 {
						   ID: 9,
						   CatID: 8,
						   Product: "Освежитель воздуха"
						 },
						 {
						   ID: 10,
						   CatID: 7,
						   Product: "Свежий минтай"
						 },
						 {
						   ID: 11,
						   CatID: 3,
						   Product: "Салями"
						 },
						 {
						   ID: 12,
						   CatID: 5,
						   Product: "Горький шоколад"
						 },
						 {
						   ID: 13,
						   CatID: 4,
						   Product: "Янтарный сыр"
						 },
						 {
						   ID: 14,
						   CatID: 2,
						   Product: "Пшеничный хлеб"
						 },
						 {
						   ID: 15,
						   CatID: 6,
						   Product: "Упаковка курицы"
						 },
						 {
						   ID: 16,
						   CatID: 3,
						   Product: "Сардельки"
						 },
						 {
						   ID: 17,
						   CatID: 2,
						   Product: "Кефир"
						 },
						 {
						   ID: 18,
						   CatID: 5,
						   Product: "Шоколадные конфеты"
						 },
						 {
						   ID: 19,
						   CatID: 10,
						   Product: "Яблочный сок"
						 }
					];



				return products;
			default: return null;		}
    }
    public eventStart(){
        return this.serviceList(this.storeService);
    }

}
