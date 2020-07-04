import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationbalancereplacementComponent } from './vacationbalancereplacement.component';

describe('VacationbalancereplacementComponent', () => {
  let component: VacationbalancereplacementComponent;
  let fixture: ComponentFixture<VacationbalancereplacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationbalancereplacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationbalancereplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
