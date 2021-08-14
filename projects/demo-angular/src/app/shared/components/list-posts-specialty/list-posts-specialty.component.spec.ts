import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostsSpecialtyComponent } from './list-posts-specialty.component';

describe('ListPostsSpecialtyComponent', () => {
  let component: ListPostsSpecialtyComponent;
  let fixture: ComponentFixture<ListPostsSpecialtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostsSpecialtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostsSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
