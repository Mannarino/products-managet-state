import { Component, Input } from '@angular/core';
import { Item } from 'src/app/core/models/item';
import { AlertifyMessagesService } from 'src/app/core/services/alertify-messages.service';
import { StateManagetCardService } from 'src/app/core/state-managet-card.service';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent {
  @Input() producto!: Item;
  constructor (private stateManagerService:StateManagetCardService,
               private alertifyMessagesService:AlertifyMessagesService){}
  add(producto:Item){
    this.stateManagerService.addToCard(producto)
    this.alertifyMessagesService.addItemMessage()
  }
  sacar(producto:Item){
    this.stateManagerService.sacarUno(producto)
    this.alertifyMessagesService.deleteItemMessage()
  }
  deleteAll(producto:Item){
    this.stateManagerService.eliminarTodos(producto)
    this.alertifyMessagesService.deleteAllItemMessage()
  }
}
