import { Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import { ComunicationDetailsService } from './comunication-details.service';
import { StateManagetCardService } from 'src/app/core/state-managet-card.service';
import { Item } from 'src/app/core/models/item';
import { AlertifyMessagesService } from 'src/app/core/services/alertify-messages.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent  {
  @Input() dataPadre!: Item;
  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('myInput') myInput!: ElementRef;
  
  constructor(private comunicationDetailsService:ComunicationDetailsService,
              private stateManageCardService:StateManagetCardService,
              private alertifyMessagesService:AlertifyMessagesService) { }
 
  @HostListener('show.bs.modal')
  onModalShow() {
    
     
    
   if (this.myModal && this.myInput) {
      // Enfoca el input cuando se muestra el modal
      (this.myInput.nativeElement as HTMLInputElement).focus();
    }
   
    
   
  }
  add(item:Item){
      this.stateManageCardService.addToCard(item)
      this.alertifyMessagesService.addItemMessage()
  }
  detalles(book:any){
    
    this.comunicationDetailsService.actualizarObjeto(book)
   
   
  }
}


