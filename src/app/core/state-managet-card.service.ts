import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StateManagetCardService {
  carrito:Item[]= []
cantidadPrecioTotal = 0 
cantidadItems = 0 

private cantidadItemsSubject = new BehaviorSubject<number>(0); 
cantidadItems$ = this.cantidadItemsSubject.asObservable()

private cantidadPrecioTotalSubject = new BehaviorSubject<number>(0); 
cantidadPrecioTotal$ = this.cantidadPrecioTotalSubject.asObservable()

private carritoSubject = new BehaviorSubject<Item[]>(this.carrito); 
carrito$ = this.carritoSubject.asObservable()




addToCard(item:Item){
  const itemEncontrado = this.carrito.find(objeto => objeto.id === item.id ); 
  if (itemEncontrado) {
    itemEncontrado.cantidad ++
    this.calcularOrden(itemEncontrado)
    console.log(this.carrito)
  } else {
    item.cantidad  = 1
   this.carrito.push(item)
   console.log(this.carrito)
   this.calcularOrden(item)
  }
}
sacarUno(item:Item){
  const itemEncontrado = this.carrito.find(objeto => objeto.id === item.id ); 
  if (itemEncontrado) {
    if(itemEncontrado.cantidad != 0){
      itemEncontrado.cantidad --
      this.cantidadPrecioTotal = this.cantidadPrecioTotal - itemEncontrado.precio
      this.cantidadItems -- 
      this.emitirActualizacionDeEstado()
    }
  } 
}
 calcularOrden(item:Item){
  if(this.cantidadPrecioTotal ===0){
    this.carrito.forEach(item =>{
    this.calcularCantidadItems(item) 
    this.calcularCantidadPrecio(item)
   })
  } else{
    this.cantidadPrecioTotal = this. cantidadPrecioTotal + item.precio
    this.cantidadItems ++ 
    this.emitirActualizacionDeEstado()
  }
 }
 calcularCantidadPrecio(item:Item){
    const nuevaCantidad=item.cantidad * item.precio
    this.cantidadPrecioTotal = this. cantidadPrecioTotal + nuevaCantidad
    console.log(this.cantidadPrecioTotal)
  }
 calcularCantidadItems(item:Item){
  this.cantidadItems = this.cantidadItems + item.cantidad
  this.emitirActualizacionDeEstado()
  }
  eliminarTodos(item:Item){
    const itemEncontrado = this.carrito.find(objeto => objeto.id === item.id );
    const dineroARestar = itemEncontrado!.cantidad * itemEncontrado!.precio
    this.cantidadPrecioTotal = this.cantidadPrecioTotal - dineroARestar
    this.cantidadItems = this.cantidadItems - itemEncontrado!.cantidad
    itemEncontrado!.cantidad = 0
    this.emitirActualizacionDeEstado()
  }
  private emitirActualizacionDeEstado(){
    this.cantidadItemsSubject.next(this.cantidadItems);
    this.cantidadPrecioTotalSubject.next(this.cantidadPrecioTotal)
    this.carritoSubject.next(this.carrito);
  }
}
