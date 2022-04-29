import { Component, OnInit } from '@angular/core';
import {KDDataService} from "../kd-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders-details-kd',
  templateUrl: './orders-details-kd.component.html',
  styleUrls: ['./orders-details-kd.component.css']
})
export class OrdersDetailsKDComponent implements OnInit {
  public image: string = ''
  public text: string = ''
  public title: string = ''
  constructor(private service: KDDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = ''
    this.route.paramMap.subscribe((param: any) => {
      id = param.get('id')
    })

    this.service.getById(id).subscribe((response: any) => {
      this.image = response['image']
      this.text = response['text']
      this.title = response['title']
    })
  }

}
