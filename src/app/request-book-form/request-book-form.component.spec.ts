import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBookFormComponent } from './request-book-form.component';

describe('RequestBookFormComponent', () => {
  let component: RequestBookFormComponent;
  let fixture: ComponentFixture<RequestBookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestBookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
