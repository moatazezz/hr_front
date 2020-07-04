import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryofmonthlyvacationsComponent } from './summaryofmonthlyvacations.component';

describe('SummaryofmonthlyvacationsComponent', () => {
  let component: SummaryofmonthlyvacationsComponent;
  let fixture: ComponentFixture<SummaryofmonthlyvacationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryofmonthlyvacationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryofmonthlyvacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
