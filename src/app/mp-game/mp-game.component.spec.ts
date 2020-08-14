import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpGameComponent } from './mp-game.component';

describe('MpGameComponent', () => {
  let component: MpGameComponent;
  let fixture: ComponentFixture<MpGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
