import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todoForm: FormGroup;

  todos: string[] = ['Todo_1', 'Todo_2', 'Todo_3'];
  lastAddedIndex: number | null = null;
  highlightedIndex: number = -1;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      newTodo: ['', Validators.required]
    });
  }

  addTodo() {
    const newTodo = this.todoForm.get('newTodo');
    if (newTodo!.value.trim() !== '') {
      this.todos.unshift(newTodo!.value.trim());
      this.lastAddedIndex = 0;
      this.todoForm.reset();
    }
  }

  toggleHighlight(index: number) {
    this.highlightedIndex = this.highlightedIndex === index ? -1 : index;
  }
}
