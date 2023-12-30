import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { BuscadorService } from 'src/app/core/buscador.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  searchTerm: FormControl = new FormControl('');
  constructor(private buscadorService:BuscadorService) {
    this.searchTerm.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(value => {
      // Aquí puedes realizar acciones con el valor del input de búsqueda, como realizar búsquedas en tiempo real
      console.log('Término de búsqueda:', value);
      this.buscadorService.buscarCoincidenciaEnArray(value)
    });
  }
}
