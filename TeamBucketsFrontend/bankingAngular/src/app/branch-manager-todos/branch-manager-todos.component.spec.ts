import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchManagerTodosComponent } from './branch-manager-todos.component';

describe('BranchManagerTodosComponent', () => {
  let component: BranchManagerTodosComponent;
  let fixture: ComponentFixture<BranchManagerTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchManagerTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchManagerTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
