import { Component } from '@angular/core';
import { BuscadorService } from 'src/app/core/services/buscador.service';
import { data } from 'src/app/data/data';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books : any[] = [];
  constructor(private buscadorService:BuscadorService){}
  ngOnInit(){
    this.buscadorService.setArrayObjetos(data.libros)
    console.log(this.books=data.libros)
    this.buscadorService.nuevaLista$
    .subscribe(value => this.books=value)
  }
}
