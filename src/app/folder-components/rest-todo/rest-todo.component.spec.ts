import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestTodoComponent } from './rest-todo.component';

describe('RestTodoComponent', () => {
  let component: RestTodoComponent;
  let fixture: ComponentFixture<RestTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
