import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportingleavebalancesComponent } from './importingleavebalances.component';

describe('ImportingleavebalancesComponent', () => {
  let component: ImportingleavebalancesComponent;
  let fixture: ComponentFixture<ImportingleavebalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportingleavebalancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportingleavebalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
