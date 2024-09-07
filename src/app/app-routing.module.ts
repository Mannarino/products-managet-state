import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { ThingsComponent } from './pages/things/things.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OrderCartComponent } from './pages/order-cart/order-cart.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'descripcion',component:WelcomeComponent},
  {path:'books',component:BooksComponent},
  {path:'things',component:ThingsComponent},
  {path:'order-card',component:OrderCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
