import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Navigator } from '../components/Navigator';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Навигатор</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Навигатор</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Navigator />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
