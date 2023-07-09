import {Component, Injectable, Input} from '@angular/core';
import {TaskModel} from "./model/TaskModel";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() description!: TaskModel;

}
