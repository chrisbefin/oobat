import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPMenuComponent } from './mp-menu.component';

describe('MPMenuComponent', () => {
  let component: MPMenuComponent;
  let fixture: ComponentFixture<MPMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
