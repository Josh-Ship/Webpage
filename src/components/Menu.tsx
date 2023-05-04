import {
  IonAvatar,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { logoGithub, book, school, logoLinkedin, mail} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'LinkedIn',
    url: '/folder/HomePage',
    iosIcon: logoLinkedin,
    mdIcon: logoLinkedin
  },
  {
    title: 'GitHub',
    url: '/page/GitHub',
    iosIcon: logoGithub,
    mdIcon: logoGithub
  },
  {
    title: 'University of Wollongong',
    url: '/page/Uow',
    iosIcon: school,
    mdIcon: school
  },
  {
    title: 'Computer Science',
    url: '/page/ComputerScienceDegree',
    iosIcon: book,
    mdIcon: book
  }
];

const info = ['Joshua Armour'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>

        <IonItem>
          <IonAvatar slot="start">
            <img src="src/Images/myface.jpeg"/>
          </IonAvatar>
          <IonLabel>
            Joshua Armour
          </IonLabel>
        </IonItem>

        <IonList id="inbox-list">
          <IonListHeader>Contact </IonListHeader>
          <IonNote>
            Josh.D.Armour@gmail.com
          </IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
