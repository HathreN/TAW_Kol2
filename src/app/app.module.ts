import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {KDDataService} from "./kd-data.service";
import {HttpClientModule} from "@angular/common/http";
import { OrdersKDComponent } from './orders-kd/orders-kd.component';
import { OrdersItemKDComponent } from './orders-item-kd/orders-item-kd.component';
import { OrdersDetailsKDComponent } from './orders-details-kd/orders-details-kd.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersKDComponent,
    OrdersItemKDComponent,
    OrdersDetailsKDComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [KDDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
