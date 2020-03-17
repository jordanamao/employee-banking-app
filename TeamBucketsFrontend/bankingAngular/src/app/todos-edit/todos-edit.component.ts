import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { TodoService } from '../todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import Todo from '../todo';

@Component({
  selector: 'app-todos-edit',
  templateUrl: './todos-edit.component.html',
  styleUrls: ['./todos-edit.component.css']
})
export class TodosEditComponent implements OnInit {
  todo: Todo;
  angForm: FormGroup;

  constructor(private todoService: TodoService,
              private router: Router,
              private fb: FormBuilder,
              private route: ActivatedRoute) {
      this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      description: ['', Validators.required ],
      dueDate: ['', Validators.required ],
      status: ['', Validators.required ],
      priority: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.todoService.editTodo(params.id).subscribe((data) => {
        console.log(data);
        this.todo = data;
        console.log(this.todo.dueDate);
      })
    });
  }

  updateTodo(description, dueDate, status, priority) {
    this.route.params.subscribe(params => {
      this.todoService.updateTodo(this.todo.id, description, dueDate, status, priority);
      this.router.navigate(['/']);
    });
  }

}
