import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsStateService {
  private subject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  nuevaLista$: Observable<Item[]> = this.subject.asObservable();
  private arrayObjetos: Item[] = [];

  buscarCoincidenciaEnArray(searchString: string) {
    const coincidencias = this.arrayObjetos.filter((objeto: Item) => objeto.nombre.includes(searchString));
    this.subject.next(coincidencias);
  }

  setArrayObjetos(array: Item[]) {
    this.arrayObjetos = array;
    this.subject.next(this.arrayObjetos);
  }
}
