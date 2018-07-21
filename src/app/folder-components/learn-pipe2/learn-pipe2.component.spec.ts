import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPipe2Component } from './learn-pipe2.component';

describe('LearnPipe2Component', () => {
  let component: LearnPipe2Component;
  let fixture: ComponentFixture<LearnPipe2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnPipe2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnPipe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
