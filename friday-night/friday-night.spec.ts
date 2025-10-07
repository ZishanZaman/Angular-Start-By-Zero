import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridayNight } from './friday-night';

describe('FridayNight', () => {
  let component: FridayNight;
  let fixture: ComponentFixture<FridayNight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FridayNight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FridayNight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
