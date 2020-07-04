import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationandsectionsComponent } from './administrationandsections.component';

describe('AdministrationandsectionsComponent', () => {
  let component: AdministrationandsectionsComponent;
  let fixture: ComponentFixture<AdministrationandsectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationandsectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationandsectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
