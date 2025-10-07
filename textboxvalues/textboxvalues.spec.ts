import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textboxvalues } from './textboxvalues';

describe('Textboxvalues', () => {
  let component: Textboxvalues;
  let fixture: ComponentFixture<Textboxvalues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Textboxvalues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Textboxvalues);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
