import { IServiceControl } from "../../handlers/ControlInterface";

export class StoreFeedService{
    feedStoresCurrent: { svc: any; query: any; };

    constructor(event: any,type: any){
        this.feedStoresCurrent = {
            svc: event,
            query: type
        }
    }
    svc: string | undefined;
    query: string | undefined;

    protected serviceFeed(event : IServiceControl){
		switch(event.svc){
			case "currentProduct":
				let productsDB = [
						{
						   ID: 1,
						   Product: "Молоко в бутылке",
						   Description: "Молоко пастеризованное цельное 3.6–4.6%, «Братья Чебурашкины»"
						 },
						 {
						   ID: 2,
						   Product: "Нарезной батон",
						   Description: "Батон нарезной Коломенское 400г"
						 },
						 {
						   ID: 3,
						   Product: "Докторская колбаса",
						   Description: "Колбаса варёная «Докторская» от Татьяны Ерёмкиной, «Наша ферма», Московская область"
						 },
						 {
						   ID: 4,
						   Product: "Мороженное",
						   Description: "Мороженое эскимо пломбир ванильный в молочном шоколаде \"Просто Азбука\""
						 },
						 {
						   ID: 5,
						   Product: "Слабосолёная селёдка",
						   Description: "Сельдь слабосоленая филе",
						 },
						 {
						   ID: 6,
						   Product: "Молочные сосиски",
						   Description: "Сосиски говяжьи, «Углече Поле», 400 г"
						 },
						 {
						   ID: 7,
						   Product: "Яблоки",
						   Description: "Яблоки сезонные"
						 },
						 {
						   ID: 8,
						   Product: "Огурцы",
						   Description: "Огурцы \"Луховицкие\""
						 },
						 {
						   ID: 9,
						   Product: "Освежитель воздуха",
						   Description: "ОСВЕЖИТЕЛЬ ВОЗДУХА MAGIC BOOM \" ЛУГОВЫЕ ЦВЕТЫ \" 300МЛ"
						 },
						 {
						   ID: 10,
						   Product: "Свежий минтай",
						   Description: "Минтай Borealis филе без кожи с/м 1/10"
						 },
						 {
						   ID: 11,
						   Product: "Салями",
						   Description: "Колбаса полукопченая салями пряная постная, «Вего»"
						 },
						 {
						   ID: 12,
						   Product: "Горький шоколад",
						   Description: "Шоколад горький Конфаэль Матрешка 60г"
						 },
						 {
						   ID: 13,
						   Product: "Янтарный сыр",
						   Description: "Сыр плавленый 60% Янтарь Ростагроэкспорт 400г"
						 },
						 {
						   ID: 14,
						   Product: "Пшеничный хлеб",
						   Description: "Хлеб белый безглютеновый Dr.Schaer 250г"
						 },
						 {
						   ID: 15,
						   Product: "Упаковка курицы",
						   Description: "Медальон из филе цыпленка Петелинка"
						 },
						 {
						   ID: 16,
						   Product: "Сардельки",
						   Description: "Сардельки говяжьи из органической говядины, «Углече Поле»"
						 },
						 {
						   ID: 17,
						   Product: "Кефир",
						   Description: "Кефир Братья Чебурашкины. Семейная ферма 2,5%"
						 },
						 {
						   ID: 18,
						   Product: "Шоколадные конфеты",
						   Description: "Шоколадные конфеты А. Коркунов Ассорти молочного и темного шоколада 110г"
						 },
						 {
						   ID: 19,
						   Product: "Яблочный сок",
						   Description: "Сок Я яблочный осветленный 0.97 л"
						 }
				];


				return productsDB;
			break;
			default: return null; break;
		}
    }
    public eventStart(){
        return this.serviceFeed(this.feedStoresCurrent);
    }

}
