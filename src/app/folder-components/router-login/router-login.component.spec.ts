import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLoginComponent } from './router-login.component';

describe('RouterLoginComponent', () => {
  let component: RouterLoginComponent;
  let fixture: ComponentFixture<RouterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
