import { Component, OnInit } from '@angular/core';
import {KDDataService} from "../kd-data.service";

@Component({
  selector: 'app-orders-kd',
  templateUrl: './orders-kd.component.html',
  styleUrls: ['./orders-kd.component.css']
})
export class OrdersKDComponent implements OnInit {
  public items$: any;
  constructor(private service: KDDataService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.service.getAll().subscribe(response =>{
      this.items$ = response;
    })
  }
}
