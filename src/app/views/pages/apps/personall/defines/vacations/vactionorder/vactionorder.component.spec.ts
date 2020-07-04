import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VactionorderComponent } from './vactionorder.component';

describe('VactionorderComponent', () => {
  let component: VactionorderComponent;
  let fixture: ComponentFixture<VactionorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VactionorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VactionorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
