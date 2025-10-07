import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBinding } from './class-binding';

describe('ClassBinding', () => {
  let component: ClassBinding;
  let fixture: ComponentFixture<ClassBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
