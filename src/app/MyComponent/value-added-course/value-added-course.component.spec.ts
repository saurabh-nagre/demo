import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueAddedCourseComponent } from './value-added-course.component';

describe('ValueAddedCourseComponent', () => {
  let component: ValueAddedCourseComponent;
  let fixture: ComponentFixture<ValueAddedCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueAddedCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueAddedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
