import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {manageRoute} from "./manageRoute";
import {AppModule} from "../../app.module";
import {MenuBarComponent} from "../../compnent/menu-bar/menu-bar.component";



@NgModule({
  declarations: [
    ManageComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule.forChild(manageRoute),

  ]
})
export class ManageModule { }
