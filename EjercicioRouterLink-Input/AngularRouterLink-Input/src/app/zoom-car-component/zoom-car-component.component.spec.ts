import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomCarComponentComponent } from './zoom-car-component.component';

describe('ZoomCarComponentComponent', () => {
  let component: ZoomCarComponentComponent;
  let fixture: ComponentFixture<ZoomCarComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomCarComponentComponent]
    });
    fixture = TestBed.createComponent(ZoomCarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
