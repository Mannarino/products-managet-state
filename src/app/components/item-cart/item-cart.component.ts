import { Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import { ComunicationDetailsService } from './comunication-details.service';
import { StateManagetCardService } from 'src/app/core/services/state-managet-card.service';
import { Item } from 'src/app/core/models/item';
import { AlertifyMessagesService } from 'src/app/core/services/alertify-messages.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent  {
  // Recibe datos del componente padre. 'dataPadre' es un objeto del tipo 'Item'
  @Input() dataPadre!: Item;

  // Referencia al elemento DOM identificado como 'myModal'
  @ViewChild('myModal') myModal!: ElementRef;
  // Referencia al elemento DOM identificado como 'myInput'
  @ViewChild('myInput') myInput!: ElementRef;
  

  // Inyección de dependencias de servicios utilizados en el componente
  constructor(private comunicationDetailsService:ComunicationDetailsService,
              private stateManageCardService:StateManagetCardService,
              private alertifyMessagesService:AlertifyMessagesService) { }
 
  // Escucha el evento 'show.bs.modal' cuando se muestra el modal            
  @HostListener('show.bs.modal')
  // Este método se ejecuta automáticamente cuando el evento 'show.bs.modal' es capturado
  onModalShow() {
   if (this.myModal && this.myInput) {
      (this.myInput.nativeElement as HTMLInputElement).focus();
    }
  }


  // Método para añadir un ítem al carrito
  add(item: Item) {
    // Añade el ítem al carrito usando el servicio 'StateManagetCardService'
    this.stateManageCardService.addToCard(item);

    // Muestra un mensaje de confirmación utilizando 'AlertifyMessagesService'
    this.alertifyMessagesService.addItemMessage();
  }

  // el metodo detalles llama a un metodode unservicio que pasara el objeto del item en cuestion
  // al componente hijo detalles el cual se despliega junto con el modal para ver los detalles del item
  detalles(book:Item){
    this.comunicationDetailsService.actualizarObjeto(book)
  }
}


