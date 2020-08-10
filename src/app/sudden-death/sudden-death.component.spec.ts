import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuddenDeathComponent } from './sudden-death.component';

describe('SuddenDeathComponent', () => {
  let component: SuddenDeathComponent;
  let fixture: ComponentFixture<SuddenDeathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuddenDeathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuddenDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
