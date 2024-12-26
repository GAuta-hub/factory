import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBillFormComponent } from './customer-bill-form.component';

describe('CustomerBillFormComponent', () => {
  let component: CustomerBillFormComponent;
  let fixture: ComponentFixture<CustomerBillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerBillFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerBillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
