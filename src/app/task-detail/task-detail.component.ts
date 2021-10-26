import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/taskModel';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();

  myTask: Task;
  id: number;

  constructor(private taskData: TaskDataService, private route: ActivatedRoute, private router: Router) { 
    // this.taskData.getTask().subscribe(task => (this.myTask = task))
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.taskData.getTaskById(this.id).subscribe(task => (this.myTask = task));
    });
  }

  deleteTask(id: number){
    this.taskData.deleteTask(id).subscribe((data:Task) => {
      this.router.navigate([("list")])
    });
  }

  onClickDelete() {
    this.taskDeleted.emit(this.task.id);
  }
 /* onTaskDeleted(taskId) {
    let taskIndex = 0;
    for(let task of this.mytask) {
      if(task.id === taskId){
        this.myTask.splice(taskIndex, 1);
        break;
      }
      taskIndex++;
    }
  }*/
}
