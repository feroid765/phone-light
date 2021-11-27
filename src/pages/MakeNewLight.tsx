import React, { useState } from 'react';
import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonListHeader, IonInput, IonIcon } from '@ionic/react';
import { SketchPicker, ColorResult} from 'react-color';
import StickCollection from '../models/StickCollection';
import Stick from '../models/Stick';
import { addOutline } from 'ionicons/icons';
import ColorChip from '../components/ColorChip';

import './MakeNewLight.css';

const AddSingleLightModal: React.FC<{isOpened: boolean}> = ({isOpened}) => {
  return (<></>)
};

const MakeNewLight: React.FC = () => {
  const [newLight, setMyLight] = useState<StickCollection>(new StickCollection("", "", [new Stick(0, "오사키 아마나", '#F53C71')]));
  const [currStick, setCurrStick] = useState<Stick>(new Stick(0, "", '#000000'));
  const [currColor, setColor] = useState<string>("#000000");

  const OnSketchPickerChange = (color: ColorResult) => {
    setColor(color.hex);
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
            newLight.StickList.map((object, i)=>
              <IonItem key={i}>
                <ColorChip color={object.Color}/>
                <IonLabel>{object.Name}</IonLabel>
              </IonItem>
            )
          }
          <IonItem>
            <IonIcon icon={addOutline}/>
            <IonLabel>추가하기</IonLabel>
          </IonItem>
        </IonList>
        <SketchPicker disableAlpha={true} presetColors={[]} width="80%" color={currColor} onChangeComplete={OnSketchPickerChange}/>
      </IonContent>
    </IonPage>
  );
};

export default MakeNewLight;
