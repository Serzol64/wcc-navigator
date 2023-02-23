import React from "react";
import { IonItem, IonLabel, IonList, IonToggle } from '@ionic/react';

export class NavigatorSettings extends React.Component{
  render(): JSX.Element{
	  return (
		<IonList>
		  <IonItem button>
			<IonLabel>Схема карты</IonLabel>
		  </IonItem>
		  <IonItem>
			<IonLabel>Автомасштаб карты</IonLabel>
			<IonToggle color="success" slot="end" checked={true}></IonToggle>
		  </IonItem>
		  <IonItem button>
			<IonLabel>Умное сопровождение пользователя</IonLabel>
		  </IonItem>
		  <IonItem>
			<IonLabel>Голосовая активация</IonLabel>
			<IonToggle color="success" slot="end"></IonToggle>
		  </IonItem>
		  <IonItem>
			<IonLabel>Голосовое сопровождение</IonLabel>
			<IonToggle color="warning" slot="end" checked={true}></IonToggle>
		  </IonItem>
		  <IonItem>
			<IonLabel><h2>Сообщить близким к пользователю людям в экстренных случаях</h2><p>Сервис в разработке</p></IonLabel>
			<IonToggle color="danger" slot="end" checked={true} disabled={true}></IonToggle>
		  </IonItem>
		 </IonList>
	  );
  }
}

export class SearchSettings extends React.Component{
    render(): JSX.Element{
       return (
		 <IonList>
		  <IonItem button>
			<IonLabel>Настройка общих элементов и данных</IonLabel>
		  </IonItem>
		  <IonItem button>
			<IonLabel>Настройка элементов и данных карты</IonLabel>
		  </IonItem>
		  <IonItem button>
			<IonLabel>Настройка элементов и данных для {'\"Покупок\"'}</IonLabel>
		  </IonItem>
		  <IonItem button>
			<IonLabel>Настройка элементов и данных для поиска магазинов</IonLabel>
		  </IonItem>
		  <IonItem>
			<IonLabel>
			 <h2>Отправлять содержимое элементов и данных Навигатора в WCC</h2>
			 <p>Для улучшения качества предоставляемых сервисами Навигатора данных и реализации новых функции</p>
			</IonLabel>
			<IonToggle color="success" slot="end" checked={true}></IonToggle>
		  </IonItem>
		  <IonItem>
			<IonLabel>Выводить рекомендации магазинов и продуктов на карте при старте Навигатора</IonLabel>
			<IonToggle color="danger" slot="end"></IonToggle>
		  </IonItem>
		  <IonItem>
			<IonLabel><h2>Выводить элементы и данные в соответствии с запросами и предпочтениями близких к пользователю людей</h2><p>функция в разработке</p></IonLabel>
			<IonToggle color="warning" slot="end" disabled={true}></IonToggle>
		  </IonItem>
		 </IonList>
	  );
    }
}

export class PushSettings extends React.Component{
    render(): JSX.Element{
       return (
		 <IonList>
			  <IonItem>
				<IonLabel><h2>Разрешить все уведомления</h2><p>Сервис в разработке</p></IonLabel>
				<IonToggle color="success" slot="end" checked={true} disabled={true}></IonToggle>
			  </IonItem>
			  <IonItem disabled={true} button>
				<IonLabel><h2>Общие уведомления</h2><p>Функция в разработке</p></IonLabel>
			  </IonItem>
			  <IonItem disabled={true} button>
				<IonLabel><h2>Уведомления от {'\"Карт\"'}</h2><p>Функция в разработке</p></IonLabel>
			  </IonItem>
			  <IonItem disabled={true} button>
				<IonLabel><h2>Уведомления от {'\"Покупок\" и \"Магазинов\"'}</h2><p>Функция в разработке</p></IonLabel>
			  </IonItem>
			  <IonItem disabled={true} button>
				<IonLabel><h2>Уведомления от WCC, сервисов безопасности Навигатора и близких к пользователю людей</h2><p>Функция в разработке</p></IonLabel>
			  </IonItem>
		 </IonList>
	  );
    }
}

export class SecuritySettings extends React.Component{
    render(): JSX.Element{
       return (
		 <IonList>
			  <IonItem button>
				<IonLabel>Привязать номер телефона/устройство близкого к пользователю человека</IonLabel>
			  </IonItem>
			  <IonItem button>
				<IonLabel>Безопасность элементов и данных Навигатора</IonLabel>
			  </IonItem>
			  <IonItem button>
				<IonLabel>Рекомендации, умные сервисы и телеметрия</IonLabel>
			  </IonItem>
			  <IonItem button>
				<IonLabel>Красная кнопка Навигатора</IonLabel>
			  </IonItem>
			  <IonItem button>
				<IonLabel>Уведомления, контроль и сообщения</IonLabel>
			  </IonItem>
			  <IonItem button>
				<IonLabel>Реклама, маркетинговые и партнёрские данные</IonLabel>
			  </IonItem>
			  <IonItem button>
				<IonLabel>Подписки и платные возможности от Совёнка и WCC</IonLabel>
			  </IonItem>
			  <IonItem>
				<IonLabel><p>Зарегистрируемый уникальный ID пользователя/устройства: 1</p></IonLabel>
			  </IonItem>
			  <IonItem disabled={true} button><IonLabel><h2>Сменить Навигатор на существующий ранее используемый вами ID(Восстановление данных)</h2><p>Сервис в разработке</p></IonLabel></IonItem>
		 </IonList>
	  );
    }
}
