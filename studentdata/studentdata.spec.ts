import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentdata } from './studentdata';

describe('Studentdata', () => {
  let component: Studentdata;
  let fixture: ComponentFixture<Studentdata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studentdata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentdata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
