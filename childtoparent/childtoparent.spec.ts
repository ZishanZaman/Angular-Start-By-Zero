import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childtoparent } from './childtoparent';

describe('Childtoparent', () => {
  let component: Childtoparent;
  let fixture: ComponentFixture<Childtoparent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childtoparent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childtoparent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
