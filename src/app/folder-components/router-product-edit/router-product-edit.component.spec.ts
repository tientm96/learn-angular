import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterProductEditComponent } from './router-product-edit.component';

describe('RouterProductEditComponent', () => {
  let component: RouterProductEditComponent;
  let fixture: ComponentFixture<RouterProductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterProductEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
