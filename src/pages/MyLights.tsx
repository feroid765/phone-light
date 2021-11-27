import React, { useState } from 'react';
import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonItem, IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import Stick from '../models/Stick';

const MyLights: React.FC = () => {
  const [myLightsData, setMyLightsData] = useState<Stick[]>([new Stick("1", "러브라이브", []), new Stick("2", "아이돌마스터", [])]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>내 폰광봉</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {myLightsData.map(ml => ml.getComponent())}
        <IonItem href="/make">
          <IonIcon icon={addOutline} style={{verticalAlign: true}}/>
          <IonLabel style={{verticalAlign: true}}>
            만들기
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default MyLights;
