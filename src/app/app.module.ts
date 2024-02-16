import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BooksComponent } from './pages/books/books.component';
import { OrderCartComponent } from './pages/order-cart/order-cart.component';
import { ThingsComponent } from './pages/things/things.component';
import { BotonCarritoComponent } from './components/header/components/boton-carrito/boton-carrito.component';
import { MenuComponent } from './components/header/components/menu/menu.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ItemCartComponent } from './components/item-cart/item-cart.component';
import { DetallesComponent } from './components/item-cart/detalles/detalles.component';
import { SelectedItemComponent } from './pages/order-cart/selected-item/selected-item.component';
import { ResumenComponent } from './pages/order-cart/resumen/resumen.component';
import { BuscadorComponent } from './components/header/components/buscador/buscador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    OrderCartComponent,
    ThingsComponent,
    BotonCarritoComponent,
    MenuComponent,
    WelcomeComponent,
    ItemCartComponent,
    DetallesComponent,
    SelectedItemComponent,
    ResumenComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
