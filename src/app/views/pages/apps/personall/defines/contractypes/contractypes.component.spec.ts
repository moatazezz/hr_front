import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractypesComponent } from './contractypes.component';

describe('ContractypesComponent', () => {
  let component: ContractypesComponent;
  let fixture: ComponentFixture<ContractypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
