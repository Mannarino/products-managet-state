import { Injectable } from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyMessagesService {

  constructor() { }
  addItemMessage(){
    alertify.success('producto agregado');
  }
  deleteItemMessage(){
    alertify.error('se saco un producto del carrito'); 
  }
  deleteAllItemMessage(){
    alertify.error('se sacaron algunos productos del carrito'); 
  }
}
