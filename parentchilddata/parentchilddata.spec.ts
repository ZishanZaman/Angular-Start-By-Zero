import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentchilddata } from './parentchilddata';

describe('Parentchilddata', () => {
  let component: Parentchilddata;
  let fixture: ComponentFixture<Parentchilddata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parentchilddata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parentchilddata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
