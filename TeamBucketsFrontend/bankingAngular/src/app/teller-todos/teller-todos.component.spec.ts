import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellerTodosComponent } from './teller-todos.component';

describe('TellerTodosComponent', () => {
  let component: TellerTodosComponent;
  let fixture: ComponentFixture<TellerTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellerTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellerTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
