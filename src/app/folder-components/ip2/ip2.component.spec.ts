import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ip2Component } from './ip2.component';

describe('Ip2Component', () => {
  let component: Ip2Component;
  let fixture: ComponentFixture<Ip2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ip2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ip2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
