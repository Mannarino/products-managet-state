import { Component } from '@angular/core';
import { ItemsStateService } from 'src/app/core/services/items-state.service';


import { data } from 'src/app/data/data';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books : any[] = [];
  constructor(private itemsStateService:ItemsStateService){}
  ngOnInit(){
    console.log('ngOnInit se está ejecutando');
    this.itemsStateService.setArrayObjetos(data.libros)
    
    this.itemsStateService.nuevaLista$
    .subscribe(value => {this.books=value
      console.log(this.books);} )
  }
}
