import {IonItem, IonLabel} from '@ionic/react';
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

    getComponent(): JSX.Element {
        return (
            <IonItem href={`/core/${this.ID}`} key={this.ID}>
                <IonLabel>
                    {this.Name}
                </IonLabel>
            </IonItem>
        );
    }
}

export default Stick;