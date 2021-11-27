import React, { useState } from 'react';
import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonListHeader, IonInput, IonIcon, IonModal } from '@ionic/react';
import { SketchPicker, ColorResult, Color} from 'react-color';
import Stick from '../models/Stick';
import Light from '../models/Light';
import { addOutline } from 'ionicons/icons';
import ColorChip from '../components/ColorChip';

import './MakeNewStick.css';

const AddSingleLightModal: React.FC<{isOpen: boolean, closeCallback: Function, addSingleLight: (name: string, color: Color)=>void}> = ({isOpen, closeCallback, addSingleLight}) => {
  const [lightColor, setLightColor] = useState<string>("#000000");
  const [lightName, setLightName] = useState<string>("");

  return (
    <IonContent>
      <IonModal isOpen={isOpen}>
        <IonContent>
          <IonToolbar>
            <IonTitle>추가할 색깔 고르기</IonTitle>
          </IonToolbar>
          <SketchPicker disableAlpha={true} presetColors={[]} width="90%" color={lightColor} onChangeComplete={color => setLightColor(color.hex)}/>
        </IonContent>
      </IonModal>
    </IonContent>
  );
};

const MakeNewStick: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [newStick, setNewStick] = useState<Stick>(new Stick("", "", [new Light("오사키 아마나", '#F53C71')]));
  
  const addSingleLight: (name: string, color: Color) => void = (name, color) => {
    let newLight = new Light(name, color);
    let tmpStick = newStick;
    tmpStick.LightList.push(newLight);
    setNewStick(tmpStick);
    setModalIsOpen(false);
  }

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
            <IonLabel>추가하기</IonLabel>
          </IonItem>
        </IonList>
        <AddSingleLightModal isOpen={modalIsOpen} closeCallback={()=>setModalIsOpen(false)} addSingleLight={addSingleLight}/>
      </IonContent>
    </IonPage>
  );
};

export default MakeNewStick;
