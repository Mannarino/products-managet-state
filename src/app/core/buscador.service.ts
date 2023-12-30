import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
 
 private subject: Subject<Item[]> = new Subject(); 
 nuevaLista$: Observable<Item[]> = this.subject.asObservable();
 private arrayObjetos:Item[] =[]

 buscarCoincidenciaEnArray(string: string) {
  const coincidencias = this.arrayObjetos.filter((objeto: Item) => objeto.nombre.includes(string));
  
  this.subject.next(coincidencias);
}


 setArrayObjetos(array:Item[]){
  this.arrayObjetos = array
 }
}
