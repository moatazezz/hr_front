import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthinsurancecategoriesComponent } from './healthinsurancecategories.component';

describe('HealthinsurancecategoriesComponent', () => {
  let component: HealthinsurancecategoriesComponent;
  let fixture: ComponentFixture<HealthinsurancecategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthinsurancecategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthinsurancecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
