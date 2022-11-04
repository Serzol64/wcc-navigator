import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonButtons,
  IonBackButton,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { navigate, cart, storefront, settings } from 'ionicons/icons';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';

import {NavigatorSettings, SearchSettings, PushSettings, SecuritySettings} from './components/settingsPage/Parameters';
import {AppInfo} from './components/settingsPage/Info';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import './components/styles/addons/settingsHeader.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/tab4">
            <Tab4 />
          </Route>
          <Route path="/tab4/navigator">
			<IonPage>
			  <IonHeader>
				<IonToolbar class="settings-header">
				  <IonButtons slot="start">
					  <IonBackButton defaultHref="/tab4" />
				  </IonButtons>
				  <IonTitle size="small">Навигатор</IonTitle>
				</IonToolbar>
			  </IonHeader>
			  <IonContent fullscreen>
				<NavigatorSettings />
			  </IonContent>
			</IonPage>
          </Route>
          <Route path="/tab4/search">
			<IonPage>
			  <IonHeader>
				<IonToolbar class="settings-header">
				  <IonButtons slot="start">
					  <IonBackButton defaultHref="/tab4" />
				  </IonButtons>
				  <IonTitle size="small">Поиск и списки</IonTitle>
				</IonToolbar>
			  </IonHeader>
			  <IonContent fullscreen>
				<SearchSettings />
			  </IonContent>
			</IonPage>
          </Route>
          <Route path="/tab4/push">
			<IonPage>
			  <IonHeader>
				<IonToolbar class="settings-header">
				  <IonButtons slot="start">
					  <IonBackButton defaultHref="/tab4" />
				  </IonButtons>
				  <IonTitle size="small">Уведомления</IonTitle>
				</IonToolbar>
			  </IonHeader>
			  <IonContent fullscreen>
				<PushSettings />
			  </IonContent>
			</IonPage>
          </Route>
          <Route path="/tab4/security">
			<IonPage>
			  <IonHeader>
				<IonToolbar class="settings-header">
				  <IonButtons slot="start">
					  <IonBackButton defaultHref="/tab4" />
				  </IonButtons>
				  <IonTitle size="small">Безопасность</IonTitle>
				</IonToolbar>
			  </IonHeader>
			  <IonContent fullscreen>
				<SecuritySettings />
			  </IonContent>
			</IonPage>
          </Route>
          <Route path="/tab4/info">
			<IonPage>
			  <IonHeader>
				<IonToolbar class="info-header">
				  <IonButtons slot="start">
					  <IonBackButton defaultHref="/tab4" />
				  </IonButtons>
				  <IonTitle size="small">О навигаторе</IonTitle>
				</IonToolbar>
			  </IonHeader>
			  <IonContent fullscreen>
				<AppInfo service="about" />
			  </IonContent>
			</IonPage>
          </Route>
          <Route path="/tab4/info/security">
			<IonPage>
			  <IonHeader>
				<IonToolbar class="info-header">
				  <IonButtons slot="start">
					  <IonBackButton defaultHref="/tab4" />
				  </IonButtons>
				  <IonTitle size="small">Политика WCC</IonTitle>
				</IonToolbar>
			  </IonHeader>
			  <IonContent fullscreen>
				<AppInfo service="security" />
			 </IonContent>
			</IonPage>
          </Route>
          <Route path="/tab4/info/list">
			<IonPage>
			  <IonHeader>
				<IonToolbar class="info-header">
				  <IonButtons slot="start">
					  <IonBackButton defaultHref="/tab4" />
				  </IonButtons>
				  <IonTitle size="small">Проекты и сервисы WCC</IonTitle>
				</IonToolbar>
			  </IonHeader>
			  <IonContent fullscreen>
				<AppInfo service="list" />
			  </IonContent>
			</IonPage>
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={navigate} />
            <IonLabel>Навигатор</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={cart} />
            <IonLabel>Покупки</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={storefront} />
            <IonLabel>Магазины</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={settings} />
            <IonLabel>Настройки</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
