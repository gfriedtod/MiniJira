import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AuthModule} from "./layout/AuthLayout/auth/auth.module";
import {RouterLink, RouterOutlet} from "@angular/router";
import {AuthComponent} from "./layout/AuthLayout/auth/auth.component";
import {appRoute} from "./app.route";
import { ManagePageComponent } from './Page/manage-page/manage-page.component';
import { MenuBarComponent } from './compnent/menu-bar/menu-bar.component';
import { TaskContentComponent } from './compnent/task-content/task-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {BouttonComponent} from "./compnent/boutton/boutton.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { AddTaskComponent } from './compnent/add-task/add-task.component';
import {CdkDrag} from "@angular/cdk/drag-drop";
import { TaskComponent } from './compnent/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ManagePageComponent,
    TaskContentComponent,
    BouttonComponent,
    AddTaskComponent,
    TaskComponent,


  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterOutlet,
    appRoute,
    RouterLink,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    CdkDrag

  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
