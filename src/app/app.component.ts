import { Component } from '@angular/core';
import { Task } from 'src/taskModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskApp';
  task: Task[];

  addTask(name) {
    this.task.unshift();
  }
}
