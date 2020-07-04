import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerdirectorComponent } from './managerdirector.component';

describe('ManagerdirectorComponent', () => {
  let component: ManagerdirectorComponent;
  let fixture: ComponentFixture<ManagerdirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerdirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerdirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
