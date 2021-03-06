import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TodoService } from '../todos.service';
import { Router } from '@angular/router';
import User from '../user';

@Component({
  selector: 'app-teller-todos',
  templateUrl: './teller-todos.component.html',
  styleUrls: ['./teller-todos.component.css']
})
export class TellerTodosComponent implements OnInit {
  user: User = {id: null, username: null, password: null, todos: null};
  name: string;

  constructor(private todoService: TodoService,  private userService: UserService, private router: Router) {
    this.name = 'Teller';
  }

  ngOnInit() {
    this.userService.getUserByName(this.name).subscribe((data) => {
      console.log(data);
      this.user = data;
    })
  }

  deleteTodo(id) {
    console.log('delete task id= ' + id);
    this.todoService.deleteTodo(id).subscribe(res => {
      console.log('delete res= ' + res);
      // console.log(this.products);
      // this.products.splice(id, 1);
      // this.router.navigate(['products']);
      this.userService.getUserByName(this.name).subscribe((data:any) => {
        console.log(data);
        this.user = data;
      });
    });
  }
}
