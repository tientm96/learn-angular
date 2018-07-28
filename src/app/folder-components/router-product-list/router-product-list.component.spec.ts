import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterProductListComponent } from './router-product-list.component';

describe('RouterProductListComponent', () => {
  let component: RouterProductListComponent;
  let fixture: ComponentFixture<RouterProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
