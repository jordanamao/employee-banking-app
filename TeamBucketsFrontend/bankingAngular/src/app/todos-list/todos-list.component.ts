import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todos.service';
import Todo from '../todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((data: any) => {
      console.log(data);
      this.todos = data;
    });
  }

  deleteTodo(id) {
    console.log('delete task id= ' + id);
    this.todoService.deleteTodo(id).subscribe(res => {
      console.log('delete res= ' + res);
      // console.log(this.products);
      // this.products.splice(id, 1);
      // this.router.navigate(['products']);
      this.todoService.getTodos().subscribe((data:any) => {
        console.log(data);
        this.todos = data;
      });
    });
  }

}
