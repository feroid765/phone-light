import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonPage, IonSlides, IonSlide } from '@ionic/react';
import { Storage } from '@ionic/storage';
import './Home.css';
import { plainToInstance } from 'class-transformer';
import Stick from '../models/Stick';

interface BladeCoreProps extends RouteComponentProps<{id: string}> {}

const BladeCore: React.FC<BladeCoreProps> = ({match}) => {
    const [stickLoaded, setStickLoaded] = useState(false);
    const [colors, setColors] = useState<string[]>([]);
    
    const loadStick = async () => {
        if(stickLoaded) return;
        const storage = new Storage();
        storage.create();
        let stickObj = await storage.get(`stick_${match.params.id}`);
        let stick = plainToInstance(Stick, stickObj) as unknown as Stick;
        setColors(stick.LightList.map(val => val.Color));
        setStickLoaded(true);
    };

    useEffect(()=>{loadStick()});

    return (
        <IonPage>
            <IonContent fullscreen scrollY={false}>
                <IonSlides style={{height:"100%"}} options={{loop:true}}>
                    {colors.map((object, i)=> 
                        <IonSlide key={i}>
                            <div className="bladeCore" style={{backgroundColor:object, height:"100%", width:"100%"}}/>
                        </IonSlide>
                    )}
                </IonSlides>
            </IonContent>
        </IonPage>
    );
};
export default BladeCore;
