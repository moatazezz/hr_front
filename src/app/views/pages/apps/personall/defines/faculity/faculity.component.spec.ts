import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaculityComponent } from './faculity.component';

describe('FaculityComponent', () => {
  let component: FaculityComponent;
  let fixture: ComponentFixture<FaculityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaculityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaculityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
