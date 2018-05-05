import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNgrxIdleComponent } from './ng-ngrx-idle.component';

describe('NgNgrxIdleComponent', () => {
  let component: NgNgrxIdleComponent;
  let fixture: ComponentFixture<NgNgrxIdleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgNgrxIdleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNgrxIdleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
