import {Component, Input, OnInit} from '@angular/core';
import {BouttonService} from "./bouttonService/BouttonService";

@Component({
  selector: 'app-boutton',
  templateUrl: './boutton.component.html',
  styleUrls: ['./boutton.component.scss']
})
export class BouttonComponent  implements  OnInit{


  @Input() stateview! : BouttonService
  state! : boolean
   text!: string;
  ngOnInit() {



    this.text =this.stateview.text
    this.state = this.stateview.stateview
  }

  changestate() {
    this.state=!this.state
  }
}
