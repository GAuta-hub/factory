import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAvailableComponent } from './stock-available.component';

describe('StockAvailableComponent', () => {
  let component: StockAvailableComponent;
  let fixture: ComponentFixture<StockAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockAvailableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
