import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonItem, IonIcon, IonButton, IonButtons } from '@ionic/react';
import {Storage} from '@ionic/storage';
import { addOutline } from 'ionicons/icons';
import {plainToInstance} from 'class-transformer';
import Stick from '../models/Stick';

const MyLights: React.FC = () => {
  const [lightLoaded, setLightLoaded] = useState(false);
  const [deleteModeActivated, setDeleteModeActivated] = useState(false);
  const [mySticksData, setMySticksData] = useState<Stick[]>([]);

  const getLightsFromStorage = async () => {
    const storage = new Storage();
    await storage.create();
    let storageKeys = await storage.keys();
    let tmp: Stick[] = [];
    for(let storageKey of storageKeys){
      if(!storageKey.startsWith("stick_")) continue;
      
      let stickObj = await storage.get(storageKey);
      let stick = plainToInstance(Stick, stickObj);
      if(!(stick instanceof Stick)) continue;
      tmp.push(stick);
    }
    setMySticksData(tmp);
    setLightLoaded(true);
  };

  const deleteLightFromStorage = deleteModeActivated ? async (ID: string) => {
    const storage = new Storage();
    await storage.create();
    await storage.remove(`stick_${ID}`);
    setDeleteModeActivated(false);
    setLightLoaded(false);
  } : null;

  useEffect(()=>{
    if(lightLoaded) return;
    getLightsFromStorage();
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>내 폰광봉</IonTitle>
          {
            mySticksData.length !== 0 ? 
            <IonButtons slot="end">
              <IonButton color={deleteModeActivated ? "" : "danger"} onClick={() => setDeleteModeActivated(!deleteModeActivated)}>{deleteModeActivated ? "취소" : "삭제"}</IonButton>
            </IonButtons>
            : <></>
          }
          
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {mySticksData.map(ml => ml.getComponent(deleteLightFromStorage))}
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
