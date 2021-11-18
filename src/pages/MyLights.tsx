import React, { useState } from 'react';
import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonItem } from '@ionic/react';
import StickCollection from '../models/StickCollection';

const MyLights: React.FC = () => {
  const [myLightsData, setMyLightsData] = useState<StickCollection[]>([new StickCollection(1, "러브라이브", []), new StickCollection(2, "아이돌마스터", [])]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>내 폰광봉</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {myLightsData.map(ml => ml.getComponent())}
        <IonItem>
          <IonLabel>
            추가하기
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default MyLights;
