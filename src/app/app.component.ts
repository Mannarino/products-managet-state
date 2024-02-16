import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { NotificationService } from './core/services/notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(readonly swPush: SwPush, 
              private swUpdate:SwUpdate,
              private notificationService:NotificationService) {}

  ngOnInit(){
    console.log("este es un valor de entorno:"+environment.prueba)
    console.log("este es un valor de entorno:"+environment.prueba2)
    console.log("este es un valor de entorno:"+import.meta.env.NG_APP_PRUEBA)
    
    this.subscribeToPush()
    this.chequearActualizaciones()
    setTimeout(() => { }, 5000); 
      
   
  }

  private async subscribeToPush() {
    try {
      const sub = await this.swPush.requestSubscription({
        serverPublicKey:environment.serverPublicKey,
      });
      // TODO: Send to server.
      this.notificationService.postData(environment.api,sub)
      .subscribe(()=>{})
    } catch (err) {
      console.error('Could not subscribe due to:', err);
    }
  }


  sendNotification( message:string) {
    if (Notification.permission === 'granted') {
      const notification = new Notification(message, {
        body: message
      });
  
      notification.onclick = () => {
        console.log('Notificación clicada');
      };
    } else {
      console.log('El permiso para notificaciones no fue concedido.');
    }
  }
  chequearActualizaciones(){
   this.swUpdate.versionUpdates.subscribe(evt => {
      switch (evt.type) {
        case 'VERSION_DETECTED':
          this.sendNotification('version detectada')
          console.log(`Downloading new app version: ${evt.version.hash}`);
          break;
        case 'VERSION_READY':
          this.sendNotification('version lista')
          console.log(`Downloading new app version:`);
          break;
        case 'VERSION_INSTALLATION_FAILED':
          this.sendNotification('fallo instalacion')
          console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
          break;
        default:
            console.log('Opción por defecto');
            break;
      }
    });
  }
}
