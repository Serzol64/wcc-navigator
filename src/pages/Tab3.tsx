import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Stores } from '../components/Stores';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="stores-page-h">
          <IonTitle>Магазины</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Магазины</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Stores />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
