import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { sparklesOutline, globeOutline } from 'ionicons/icons';
import './Home.css';

import MyLights from './MyLights';
import OtherLights from './OtherLights';

const Home: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact from="/home" to="/home/my-lights"/>
        <Route exact path="/home/my-lights" component={MyLights}/>
        <Route exact path="/home/other-lights" component={OtherLights}/>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/home/my-lights">
          <IonIcon icon={sparklesOutline} />
          <IonLabel>내 폰광봉</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/home/other-lights">
          <IonIcon icon={globeOutline} />
          <IonLabel>다른 사람의 폰광봉 찾아보기</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Home;
