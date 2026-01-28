import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCompletedTodosComponent } from './in-completed-todos.component';

describe('InCompletedTodosComponent', () => {
  let component: InCompletedTodosComponent;
  let fixture: ComponentFixture<InCompletedTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCompletedTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCompletedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
