import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPSummaryComponent } from './sp-summary.component';

describe('SPSummaryComponent', () => {
  let component: SPSummaryComponent;
  let fixture: ComponentFixture<SPSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
