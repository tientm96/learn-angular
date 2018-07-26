import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterAboutComponent } from './router-about.component';

describe('RouterAboutComponent', () => {
  let component: RouterAboutComponent;
  let fixture: ComponentFixture<RouterAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
