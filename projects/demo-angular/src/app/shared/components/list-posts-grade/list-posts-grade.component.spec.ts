import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostsGradeComponent } from './list-posts-grade.component';

describe('ListPostsGradeComponent', () => {
  let component: ListPostsGradeComponent;
  let fixture: ComponentFixture<ListPostsGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostsGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostsGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
