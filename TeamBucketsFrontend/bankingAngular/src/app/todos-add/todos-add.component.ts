import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { TodoService } from '../todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import Todo from '../todo';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.css']
})
export class TodosAddComponent implements OnInit {
  todo: Todo = {id: null, description: null, dueDate: null, status: null, priority: null};
  angForm: FormGroup;
  
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private todoService: TodoService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      id: ['', Validators.required],
      description: ['', Validators.required ],
      status: ['', Validators.required ],
      priority: ['', Validators.required ],
      dueDate: ['', Validators.required ]
    });
  }

  onSubmit(description, dueDate, status, priority) {
    console.log(this.angForm);
    this.route.params.subscribe(params => {
      this.todoService.addTodo(params.id, description, dueDate, status, priority);
      this.router.navigate(['/']);
    });
  }

}
