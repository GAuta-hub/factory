import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialsComponent } from './rawmaterials.component';

describe('RawmaterialsComponent', () => {
  let component: RawmaterialsComponent;
  let fixture: ComponentFixture<RawmaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RawmaterialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawmaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
