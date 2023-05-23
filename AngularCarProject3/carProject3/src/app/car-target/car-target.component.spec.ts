import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTargetComponent } from './car-target.component';

describe('CarTargetComponent', () => {
  let component: CarTargetComponent;
  let fixture: ComponentFixture<CarTargetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarTargetComponent]
    });
    fixture = TestBed.createComponent(CarTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
