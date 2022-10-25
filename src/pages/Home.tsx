import React from "react";
import "./Home.scss";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { apps, flash, send } from "ionicons/icons";
import HomePage from "./Tabs/HomePage";
import Account from "./Tabs/Account";
import Message from "./Tabs/Message";
import Overview from "./Tabs/Overview";

export const Home: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonPage id="main">
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/:tab(tab1)" component={Overview} exact={true} />
              <Route path="/:tab(tab2)" component={Message} exact={true} />
              <Route path="/:tab(tab2)/details" component={HomePage} />
              <Route path="/:tab(tab3)" component={Account} />
              <Route exact path="/" render={() => <Redirect to="/tab1" />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon icon={flash} />
                <IonLabel>Tab One</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon icon={apps} />
                <IonLabel>Tab Two</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={send} />
                <IonLabel>Tab Three</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonPage>
      </IonReactRouter>
    </IonApp>
  );
};
