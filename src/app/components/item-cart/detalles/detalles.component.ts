import { Component} from '@angular/core';
import { ComunicationDetailsService } from '../comunication-details.service';
import { Subscription } from 'rxjs';
import { AlertifyMessagesService } from 'src/app/core/services/alertify-messages.service';
import { StateManagetCardService } from 'src/app/core/services/state-managet-card.service';
import { Item } from 'src/app/core/models/item';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  detallesObject: Item = {
    nombre: '',
    precio: 0,
    cantidad: 0,
    id:0,
    imagen: ''
  };
   private suscripcion: Subscription | undefined;
  constructor(private comunicationDetailsService:ComunicationDetailsService,
              private stateManageCardService:StateManagetCardService,
              private alertifyMessagesService:AlertifyMessagesService) { }
  ngOnInit(): void {
   this.suscripcion =  this.comunicationDetailsService.obtenerObjetoObservable().subscribe(objeto => {
      this.detallesObject = objeto;
      // Aquí puedes hacer lo que necesites con el objeto actualizado
    });
  }
  add(item:Item){
    this.stateManageCardService.addToCard(item)
    this.alertifyMessagesService.addItemMessage()
}
  ngOnDestroy(): void {
    // Nos desuscribimos al destruir el componente
    if (this.suscripcion) {
      this.suscripcion.unsubscribe();
    }
  }
}



  

