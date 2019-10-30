import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPaymentComponent } from './ticket-payment.component';

describe('TicketPaymentComponent', () => {
  let component: TicketPaymentComponent;
  let fixture: ComponentFixture<TicketPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
