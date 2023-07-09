import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ɵElement} from "@angular/forms";
import {BouttonService} from "../boutton/bouttonService/BouttonService";
import {BehaviorSubject} from "rxjs";
import {TaskModel} from "../task/model/TaskModel";

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrls: ['./task-content.component.scss']
})
export class TaskContentComponent implements OnInit{
   add: boolean= false;
  constructor( private  fb: FormBuilder) {
  }

  title : string = "debut"
  change : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  titleChange!: any
  submit : BouttonService = new BouttonService('submit', false)
  tasksDes: string = "debut";
  @Input() tasks: TaskModel[] = [];
  task!: FormGroup;
  @Output() newTaks = new EventEmitter<TaskModel>();

  ChnageTitle() {
    this.change.next(true)

  }

  ngOnInit(): void {
    this.titleChange = this.fb.group({
      title: ['']
    })
    this.task = this.fb.group({
      description : ['']
      }

    )
  }


  onSubmit() {
    this.title = this.titleChange.value.title

    this.change.next(false)
    console.log(this.change)

  }

  addTask() {
    this.add = true
  }

  addTasks() {
    this.newTaks.emit({ description :this.task.value.description , categorie : this.title})
    this.tasks.push({ description :this.task.value.description , categorie : this.title})
    this.add =false

  }
}
