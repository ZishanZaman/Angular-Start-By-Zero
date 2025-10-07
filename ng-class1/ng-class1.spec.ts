import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClass1 } from './ng-class1';

describe('NgClass', () => {
  let component: NgClass1;
  let fixture: ComponentFixture<NgClass1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClass1],
    }).compileComponents();

    fixture = TestBed.createComponent(NgClass1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
