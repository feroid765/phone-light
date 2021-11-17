import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const MyLights: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>내 폰광봉</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>내 폰광봉</div>
      </IonContent>
    </IonPage>
  );
};

export default MyLights;
