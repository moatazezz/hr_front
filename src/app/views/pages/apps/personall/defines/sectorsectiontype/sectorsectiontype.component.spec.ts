import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsectiontypeComponent } from './sectorsectiontype.component';

describe('SectorsectiontypeComponent', () => {
  let component: SectorsectiontypeComponent;
  let fixture: ComponentFixture<SectorsectiontypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorsectiontypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorsectiontypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
