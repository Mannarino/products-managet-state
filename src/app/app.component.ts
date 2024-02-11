import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(readonly swPush: SwPush, private swUpdate:SwUpdate) {}

  ngOnInit(){
    this.subscribeToPush()
    this.chequearActualizaciones()
    setTimeout(() => {
      
    }, 5000); 
  }

  private async subscribeToPush() {
    try {
      const sub = await this.swPush.requestSubscription({
        serverPublicKey:"BBvxcJ95z5H43KlQ4KKUPvodaeq71kyHftpqLPoJ1hW2eleZURivWVLGdn9cJnDvGgXfXFGcZ8Pvo-Bix4Tktvc",
      });
      // TODO: Send to server.
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
