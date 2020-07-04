import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningleavebalancesComponent } from './openingleavebalances.component';

describe('OpeningleavebalancesComponent', () => {
  let component: OpeningleavebalancesComponent;
  let fixture: ComponentFixture<OpeningleavebalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningleavebalancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningleavebalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
