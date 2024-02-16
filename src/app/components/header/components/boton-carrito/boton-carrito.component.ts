import { Component } from '@angular/core';
import { StateManagetCardService } from 'src/app/core/services/state-managet-card.service';

@Component({
  selector: 'app-boton-carrito',
  templateUrl: './boton-carrito.component.html',
  styleUrls: ['./boton-carrito.component.css']
})
export class BotonCarritoComponent {
    cantidadProductos = 0
    constructor(private stateManagetCard:StateManagetCardService){}
    ngOnInit(){
      this.stateManagetCard.cantidadItems$
      .subscribe(cantidad =>{
        this.cantidadProductos = cantidad
      })
    }
}
