import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterContact2Component } from './router-contact2.component';

describe('RouterContact2Component', () => {
  let component: RouterContact2Component;
  let fixture: ComponentFixture<RouterContact2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterContact2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterContact2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
