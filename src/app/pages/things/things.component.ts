import { Component } from '@angular/core';
import { ItemsStateService } from 'src/app/core/services/items-state.service';

import { data } from 'src/app/data/data';
@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css']
})
export class ThingsComponent {
  things : any[] = [];
  constructor(private itemsStateService:ItemsStateService){}
  ngOnInit(){
    this.itemsStateService.setArrayObjetos(data.libros)
    
    this.itemsStateService.nuevaLista$
    .subscribe(value => this.things=value)
  }
}
