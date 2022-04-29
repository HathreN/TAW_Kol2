import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersKDComponent} from "./orders-kd/orders-kd.component";
import {OrdersDetailsKDComponent} from "./orders-details-kd/orders-details-kd.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersKDComponent
  },
  {
  path: 'orders/:id',
    component: OrdersDetailsKDComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
