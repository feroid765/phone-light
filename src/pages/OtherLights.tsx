import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const OtherLights: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>다른 폰광봉</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>다른 폰광봉 목록</div>
      </IonContent>
    </IonPage>
  );
};

export default OtherLights;
