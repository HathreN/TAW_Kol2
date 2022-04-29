import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsKDComponent } from './orders-details-kd.component';

describe('OrdersDetailsKDComponent', () => {
  let component: OrdersDetailsKDComponent;
  let fixture: ComponentFixture<OrdersDetailsKDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsKDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsKDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
