import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPMenuComponent } from './sp-menu.component';

describe('SPMenuComponent', () => {
  let component: SPMenuComponent;
  let fixture: ComponentFixture<SPMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
