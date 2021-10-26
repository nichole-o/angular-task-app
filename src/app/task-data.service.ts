import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../taskModel';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  task: Task[];

  taskUrl = "http://localhost:3000/tasks";

  getTask = () : Observable <Task[]> => {
    return this.http.get<Task[]>(this.taskUrl);
  }

  getTaskById = (id: number) : Observable <Task> => {
    return this.http.get<Task>(this.taskUrl+"/"+id);
  } 

  createNewTask = (newTask: Task): Observable<Task> => {
    return this.http.post<Task>(this.taskUrl, newTask);
  }

  deleteTask = (id: number): Observable <Task> => {
    return this.http.delete<Task>(this.taskUrl+"/"+id);
  }

  constructor( private http: HttpClient) { }
}
