import { Component } from '@angular/core';
import { StateManagetCardService } from 'src/app/core/state-managet-card.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {
  totalPrecio = 0
  totalItems = 0
   constructor(private stateManagerService:StateManagetCardService){}
   ngOnInit(){
    this.stateManagerService.cantidadItems$
    .subscribe(totalItems => this.totalItems= totalItems)

    this.stateManagerService.cantidadPrecioTotal$
    .subscribe(totalPrecio =>{
        this.totalPrecio = totalPrecio
    })
   }
}
