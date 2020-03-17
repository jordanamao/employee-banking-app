import { TestBed } from '@angular/core/testing';

import { TodoService } from './todos.service';

describe('TodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });
});


