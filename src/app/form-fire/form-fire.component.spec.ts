import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFireComponent } from './form-fire.component';

describe('FormFireComponent', () => {
  let component: FormFireComponent;
  let fixture: ComponentFixture<FormFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
