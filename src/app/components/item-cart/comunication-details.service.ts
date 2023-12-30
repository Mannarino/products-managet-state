import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/core/models/item';
@Injectable({
  providedIn: 'root'
})
export class ComunicationDetailsService {
  private itemDetalis = new BehaviorSubject<Item>({ nombre: '',
    precio: 0,
    cantidad: 0,
    id:0,
    imagen: ''}); 

  // Método para actualizar el objeto emitido por el BehaviorSubject
  actualizarObjeto(nuevoObjeto:Item) {
    this.itemDetalis.next(nuevoObjeto);
  }

  // Método para acceder al Observable
  obtenerObjetoObservable() {
    return this.itemDetalis.asObservable();
  }
  constructor() { }
}

