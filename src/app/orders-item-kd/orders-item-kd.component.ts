import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-kd',
  templateUrl: './orders-item-kd.component.html',
  styleUrls: ['./orders-item-kd.component.css']
})
export class OrdersItemKDComponent implements OnInit {
  @Input() id?: string;
  @Input() title?: string;
  @Input() text?: string;
  @Input() image?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
