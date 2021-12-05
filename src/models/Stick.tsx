import {IonItem, IonLabel, IonButtons, IonButton} from '@ionic/react';
import Light from './Light';

class Stick{
    ID: string;
    Name: string;
    LightList: Light[];

    constructor(
        ID: string,
        Name: string,
        LightList: Light[]
    ){this.ID = ID;this.Name = Name;this.LightList = LightList;}

    getComponent(deleteCallback: Function | null = null): JSX.Element {
        return (
            <IonItem href={deleteCallback === null ? `/core/${this.ID}` : undefined} key={this.ID}>
                <IonLabel>
                    {this.Name}
                </IonLabel>
                {deleteCallback !== null ?
                    <IonButtons slot="end">
                        <IonButton color="danger" onClick={() => deleteCallback(this.ID)}>삭제</IonButton>
                    </IonButtons>
                : <></>}
            </IonItem>
        );
    }
}

export default Stick;