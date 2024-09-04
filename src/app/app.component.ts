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
    //console.log("este es un valor de entorno:"+environment.prueba)
    //console.log("este es un valor de entorno:"+environment.prueba2)
    //console.log("este es un valor de entorno:"+import.meta.env.NG_APP_PRUEBA)
    
    //this.subscribeToPush()
    //this.chequearActualizaciones()
    //setTimeout(() => { }, 5000); 
      
   
  }

  // Método para suscribirse a las notificaciones push de manera asincrónica
// private async subscribeToPush() {
//   try {
//     // Solicita una suscripción a las notificaciones push
//     const sub = await this.swPush.requestSubscription({
//       serverPublicKey: environment.serverPublicKey, // Clave pública del servidor
//     });
//     // TODO: Envía la suscripción al servidor
//     this.notificationService.postData(environment.api, sub)
//       .subscribe(() => {});
//   } catch (err) {
//     // Muestra un mensaje de error en la consola si la suscripción falla
//     console.error('Could not subscribe due to:', err);
//   }
// }

// Método para enviar una notificación con un mensaje dado
// sendNotification(message: string) {
//   // Verifica si el permiso para enviar notificaciones está concedido
//   if (Notification.permission === 'granted') {
//     // Crea y muestra la notificación
//     const notification = new Notification(message, {
//       body: message
//     });

//     // Define lo que ocurre cuando se hace clic en la notificación
//     notification.onclick = () => {
//       console.log('Notificación clicada');
//     };
//   } else {
//     // Muestra un mensaje en la consola si el permiso no fue concedido
//     console.log('El permiso para notificaciones no fue concedido.');
//   }
// }

// Método para verificar si hay actualizaciones de la aplicación
// chequearActualizaciones() {
//   // Se suscribe a los eventos de actualización de la versión
//   this.swUpdate.versionUpdates.subscribe(evt => {
//     // Actúa según el tipo de evento recibido
//     switch (evt.type) {
//       case 'VERSION_DETECTED':
//         // Envía una notificación cuando se detecta una nueva versión
//         this.sendNotification('versión detectada');
//         console.log(`Downloading new app version: ${evt.version.hash}`);
//         break;
//       case 'VERSION_READY':
//         // Envía una notificación cuando la nueva versión está lista
//         this.sendNotification('versión lista');
//         console.log(`Downloading new app version:`);
//         break;
//       case 'VERSION_INSTALLATION_FAILED':
//         // Envía una notificación si la instalación de la nueva versión falla
//         this.sendNotification('fallo instalación');
//         console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
//         break;
//       default:
//         // Caso por defecto si el evento no coincide con los anteriores
//         console.log('Opción por defecto');
//         break;
//     }
//   });
// }

}
