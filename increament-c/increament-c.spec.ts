import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreamentC } from './increament-c';

describe('IncreamentC', () => {
  let component: IncreamentC;
  let fixture: ComponentFixture<IncreamentC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncreamentC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncreamentC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
