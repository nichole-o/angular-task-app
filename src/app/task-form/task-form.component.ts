import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/taskModel';
import { TaskDataService } from '../task-data.service';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  newTask: Task = new Task();

  constructor(private taskService: TaskDataService, private router: Router) { }

  ngOnInit(): void {
  }

  createNewTask(){
    this.taskService.createNewTask(this.newTask).subscribe((newTask: Task) => {
      console.log("the form was submitted successfully!", this.newTask);
      this.newTask = newTask;
      this.router.navigate(['list']);
    });
  }
}
