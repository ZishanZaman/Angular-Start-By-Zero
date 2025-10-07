import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnventBinding } from './envent-binding';

describe('EnventBinding', () => {
  let component: EnventBinding;
  let fixture: ComponentFixture<EnventBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnventBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnventBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
