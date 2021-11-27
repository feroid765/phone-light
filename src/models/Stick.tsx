import React from 'react';
import {IonItem, IonLabel} from '@ionic/react';
import Light from './Light';

class Stick{
    constructor(
        readonly ID: string,
        readonly Name: string,
        readonly LightList: Light[]
    ){};

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