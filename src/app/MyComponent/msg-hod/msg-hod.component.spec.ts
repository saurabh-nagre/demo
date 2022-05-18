import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgHODComponent } from './msg-hod.component';

describe('MsgHODComponent', () => {
  let component: MsgHODComponent;
  let fixture: ComponentFixture<MsgHODComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgHODComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgHODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
