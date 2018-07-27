import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterProductDetailComponent } from './router-product-detail.component';

describe('RouterProductDetailComponent', () => {
  let component: RouterProductDetailComponent;
  let fixture: ComponentFixture<RouterProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
