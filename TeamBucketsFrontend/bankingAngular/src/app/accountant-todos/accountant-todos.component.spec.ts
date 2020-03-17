import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantTodosComponent } from './accountant-todos.component';

describe('AccountantTodosComponent', () => {
  let component: AccountantTodosComponent;
  let fixture: ComponentFixture<AccountantTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountantTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountantTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
