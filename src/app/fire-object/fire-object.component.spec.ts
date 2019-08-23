import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireObjectComponent } from './fire-object.component';

describe('FireObjectComponent', () => {
  let component: FireObjectComponent;
  let fixture: ComponentFixture<FireObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
