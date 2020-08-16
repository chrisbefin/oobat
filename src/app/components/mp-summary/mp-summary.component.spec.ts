import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpSummaryComponent } from './mp-summary.component';

describe('MpSummaryComponent', () => {
  let component: MpSummaryComponent;
  let fixture: ComponentFixture<MpSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
