import { IonContent, IonPage, IonSlides, IonSlide } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const colors: string[] = ["red", "blue", "green"];

const BladeCore: React.FC = () => {
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
