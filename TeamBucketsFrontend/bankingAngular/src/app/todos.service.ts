import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Todo from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private uri: string;

  constructor(private http: HttpClient) {
    this.uri = 'http://localhost:8080/api/todos';
  }

  addTodo(id, description, dueDate, status, priority) {
    const obj = {
      description,
      dueDate,
      status,
      priority
    };
    console.log('check object before posting ');
    console.log(obj);
    this.http.post(`${this.uri}/${id}`, obj)
        .subscribe(res => console.log('Done'));
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.uri}`);
  }

  editTodo(id) {
    return this.http.get<Todo>(`${this.uri}/${id}`);
  }

  updateTodo(id, description, dueDate, status, priority) {
    const obj = {
      id,
      description,
      dueDate,
      priority,
      status
    };

    console.log(obj);

    console.log(`${this.uri}/${Number(id)}`);

    this.http.put(`${this.uri}/${Number(id)}`, obj).subscribe(res => console.log('Done'));
  }

  deleteTodo(id) {
    return this.http.delete(`${this.uri}/${Number(id)}`);
  }
}