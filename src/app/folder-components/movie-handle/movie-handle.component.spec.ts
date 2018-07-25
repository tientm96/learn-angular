import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHandleComponent } from './movie-handle.component';

describe('MovieHandleComponent', () => {
  let component: MovieHandleComponent;
  let fixture: ComponentFixture<MovieHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
