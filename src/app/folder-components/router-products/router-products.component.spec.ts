import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterProductsComponent } from './router-products.component';

describe('RouterProductsComponent', () => {
  let component: RouterProductsComponent;
  let fixture: ComponentFixture<RouterProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
