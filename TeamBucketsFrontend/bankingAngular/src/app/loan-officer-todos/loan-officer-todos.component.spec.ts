import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOfficerTodosComponent } from './loan-officer-todos.component';

describe('LoanOfficerTodosComponent', () => {
  let component: LoanOfficerTodosComponent;
  let fixture: ComponentFixture<LoanOfficerTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanOfficerTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOfficerTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
