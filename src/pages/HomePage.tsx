import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';
import Page from './Page';

const HomePage: React.FC = () => {




    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Welcome to my page!</IonTitle>
          </IonToolbar>
        </IonHeader>

               
        <IonContent fullscreen>
         
        <IonTitle>Here are my pc specs</IonTitle> 
         <IonCard>
         <IonCardHeader>
            <IonCardTitle>Gigabyte GeForce RTX 3060 EAGLE OC 12GB Video Card - Rev. 2.0 LHR Version </IonCardTitle>
          </IonCardHeader>
          <img src='src/Images/gtx3060.jpg' />
          
         </IonCard>
        </IonContent>

      </IonPage>

    );
};

export default HomePage;