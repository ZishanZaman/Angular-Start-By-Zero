import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaturcalDirc } from './staturcal-dirc';

describe('StaturcalDirc', () => {
  let component: StaturcalDirc;
  let fixture: ComponentFixture<StaturcalDirc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaturcalDirc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaturcalDirc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
