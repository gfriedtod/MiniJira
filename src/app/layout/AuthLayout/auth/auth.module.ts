import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from "../../../Page/login-page/login-page.component";
import {SignUpPageComponent} from "../../../Page/sign-up-page/sign-up-page.component";
import {Router, RouterModule} from "@angular/router";
import {AuthenticationRoutes} from "./authentication.route";



@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes)
  ]
})
export class AuthModule { }
