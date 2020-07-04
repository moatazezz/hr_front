import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceofficeComponent } from './insuranceoffice.component';

describe('InsuranceofficeComponent', () => {
  let component: InsuranceofficeComponent;
  let fixture: ComponentFixture<InsuranceofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
