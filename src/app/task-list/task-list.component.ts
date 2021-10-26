import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/taskModel';
import { TaskDataService } from '../task-data.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  task: Task = new Task();
  taskDeleted: EventEmitter<number> = new EventEmitter();
  taskList: Task[];

  constructor(private taskData: TaskDataService, private router: Router) { 
    this.taskData.getTask().subscribe(t => (this.taskList = t));
  }

  ngOnInit(): void {
    this.taskData.getTask().subscribe(task => (this.taskList = task));
  }
  onClickDelete(id: number) {
    this.taskData.deleteTask(id).subscribe(() =>{
      // this.router.navigate([("list")]);
      this.ngOnInit();
    })
  }

}
