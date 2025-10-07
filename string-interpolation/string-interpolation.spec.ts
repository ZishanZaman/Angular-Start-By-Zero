import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpolation } from './string-interpolation';

describe('StringInterpolation', () => {
  let component: StringInterpolation;
  let fixture: ComponentFixture<StringInterpolation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringInterpolation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringInterpolation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
