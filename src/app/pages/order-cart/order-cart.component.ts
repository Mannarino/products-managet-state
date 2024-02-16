import { Component } from '@angular/core';
import { Item } from 'src/app/core/models/item';
import { StateManagetCardService } from 'src/app/core/services/state-managet-card.service';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css']
})
export class OrderCartComponent {
  Productos:Item[] = []
    constructor(private stateManagetCard:StateManagetCardService){}
    ngOnInit(){
      this.stateManagetCard.carrito$
      .subscribe(cantidad =>{
        this.Productos = cantidad
      })
    }
}
