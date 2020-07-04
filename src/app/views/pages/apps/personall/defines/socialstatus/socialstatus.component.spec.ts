import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialstatusComponent } from './socialstatus.component';

describe('SocialstatusComponent', () => {
  let component: SocialstatusComponent;
  let fixture: ComponentFixture<SocialstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
