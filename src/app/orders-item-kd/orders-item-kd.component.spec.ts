import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemKDComponent } from './orders-item-kd.component';

describe('OrdersItemKDComponent', () => {
  let component: OrdersItemKDComponent;
  let fixture: ComponentFixture<OrdersItemKDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemKDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemKDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
