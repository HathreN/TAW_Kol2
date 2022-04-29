import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersKDComponent } from './orders-kd.component';

describe('OrdersKDComponent', () => {
  let component: OrdersKDComponent;
  let fixture: ComponentFixture<OrdersKDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersKDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersKDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
