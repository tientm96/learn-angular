import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormErrorValidateComponent } from './reactive-form-error-validate.component';

describe('ReactiveFormErrorValidateComponent', () => {
  let component: ReactiveFormErrorValidateComponent;
  let fixture: ComponentFixture<ReactiveFormErrorValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormErrorValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormErrorValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
