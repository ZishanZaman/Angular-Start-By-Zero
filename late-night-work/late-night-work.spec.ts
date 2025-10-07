import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateNightWork } from './late-night-work';

describe('LateNightWork', () => {
  let component: LateNightWork;
  let fixture: ComponentFixture<LateNightWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateNightWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateNightWork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
