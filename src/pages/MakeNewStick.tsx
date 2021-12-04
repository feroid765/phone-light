import React, { useState } from 'react';
import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonListHeader, IonInput, IonIcon, IonModal, IonButton } from '@ionic/react';
import {Storage} from '@ionic/storage';
import { HexColorPicker } from 'react-colorful';
import Stick from '../models/Stick';
import Light from '../models/Light';
import { addOutline, closeOutline } from 'ionicons/icons';
import ColorChip from '../components/ColorChip';
import { validateHexColor } from '../Common';

import './MakeNewStick.css';
import { InputChangeEventDetail } from '@ionic/core';

const AddSingleLightModal: React.FC<{isOpen: boolean, closeCallback: Function, addSingleLight: (name: string, color: string)=>void}> = ({isOpen, closeCallback, addSingleLight}) => {
  const [lightColor, setLightColor] = useState("#000000");
  const [lightName, setLightName] = useState<string>("");

  const onColorInputChange = (e: CustomEvent<InputChangeEventDetail>) => {
    let value = e.detail.value;
    if(value === null || value === undefined || !validateHexColor(value)) setLightColor(lightColor);
    else setLightColor(value);
  }

  const onNameInputChange = (e: CustomEvent<InputChangeEventDetail>) => {
    let value = e.detail.value;
    if(value === null || value === undefined) return;
    else setLightName(value);
  }

  const onAddClick = () => {
    addSingleLight(lightName, lightColor);
    closeCallback();
  }

  return (
    <IonContent>
      <IonModal isOpen={isOpen}>
        <IonContent>
          <IonToolbar>
            <IonIcon icon={closeOutline} slot="start" onClick={(e)=>closeCallback()}/>
            <IonTitle>색깔 추가하기</IonTitle>
          </IonToolbar>
            <IonItem style={{background:"#ff0000"}}>
              <IonLabel className="inputLabel">색깔 이름</IonLabel>
              <IonInput value={lightName} onIonChange={onNameInputChange} placeholder="캐릭터 이름 등을 넣으세요!"/>
            </IonItem>
            <IonItem>
              <IonLabel className="inputLabel">폰광봉 색깔</IonLabel>
              <IonInput value={lightColor} onIonChange={onColorInputChange}/>
              <ColorChip color={lightColor}/>
            </IonItem>
            <HexColorPicker id="colorPicker" color={lightColor} onChange={setLightColor}/>
            <IonButton expand="block" onClick={onAddClick}>색깔 추가하기</IonButton>
        </IonContent>
      </IonModal>
    </IonContent>
  );
};

const MakeNewStick: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [newStick, setNewStick] = useState<Stick>(new Stick("", "", []));
  
  const addSingleLight: (name: string, color: string) => void = (name, color) => {
    let newLight = new Light(name, color);
    let tmpStick = newStick;
    tmpStick.LightList.push(newLight);
    setNewStick(tmpStick);
    setModalIsOpen(false);
  };

  const saveNewStick = async () => {
    const storage = new Storage();
    await storage.create();

    let storageKeys = await storage.keys();
    let max = -1;
    for(let storageKey of storageKeys){
      if(storageKey.startsWith("stick_")){
        let lightIndex = parseInt(storageKey.substring(6));
        if(lightIndex !== undefined && lightIndex > max) max = lightIndex;
      }
    }

    newStick.ID = (max + 1).toString();
    await storage.set(`stick_${newStick.ID}`, newStick);
    document.location = "/home/my-lights";
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader translucent>
          <IonToolbar>
            <IonTitle>내 폰광봉 만들기</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem style={{background:"#ff0000"}}>
            <IonLabel className="inputLabel">폰광봉 이름</IonLabel>
            <IonInput placeholder="내 폰광봉"></IonInput>
          </IonItem>
          <IonListHeader>
            폰광봉 색깔
          </IonListHeader>
          {
            newStick.LightList.map((object, i)=>
              <IonItem key={i}>
                <ColorChip color={object.Color}/>
                <IonLabel>{object.Name}</IonLabel>
              </IonItem>
            )
          }
          <IonItem onClick={()=>setModalIsOpen(true)}>
            <IonIcon icon={addOutline}/>
            <IonLabel>색깔 추가하기</IonLabel>
          </IonItem>
        </IonList>

        <IonButton expand="block" onClick={saveNewStick}>추가하기</IonButton>
        <AddSingleLightModal isOpen={modalIsOpen} closeCallback={()=>setModalIsOpen(false)} addSingleLight={addSingleLight}/>
      </IonContent>
    </IonPage>
  );
};

export default MakeNewStick;
