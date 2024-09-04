import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ItemsStateService } from 'src/app/core/services/items-state.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  searchTerm: FormControl = new FormControl('');
  constructor(private itemsStateService:ItemsStateService){}
  ngOnInit(){
    this.searchTerm.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(value => {
      this.itemsStateService.buscarCoincidenciaEnArray(value)
    });
  }
}

