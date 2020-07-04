import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsettlementComponent } from './vacationsettlement.component';

describe('VacationsettlementComponent', () => {
  let component: VacationsettlementComponent;
  let fixture: ComponentFixture<VacationsettlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationsettlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationsettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
