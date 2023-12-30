import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { ThingsComponent } from './pages/things/things.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OrderCartComponent } from './pages/order-cart/order-cart.component';

const routes: Routes = [
  {path:'welcome',component:WelcomeComponent},
  {path:'books',component:BooksComponent},
  {path:'things',component:ThingsComponent},
  {path:'order-card',component:OrderCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
