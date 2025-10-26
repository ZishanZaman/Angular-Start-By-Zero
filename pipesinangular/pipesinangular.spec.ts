import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipesinangular } from './pipesinangular';

describe('Pipesinangular', () => {
  let component: Pipesinangular;
  let fixture: ComponentFixture<Pipesinangular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipesinangular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipesinangular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
