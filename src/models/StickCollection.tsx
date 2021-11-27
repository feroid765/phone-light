import React from 'react';
import {IonItem, IonLabel} from '@ionic/react';
import Stick from './Stick';

class StickCollection{
    constructor(
        readonly ID: string,
        readonly Name: string,
        readonly StickList: Stick[]
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

export default StickCollection;