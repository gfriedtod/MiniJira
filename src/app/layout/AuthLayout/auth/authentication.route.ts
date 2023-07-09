import {Routes} from "@angular/router";
import {LoginPageComponent} from "../../../Page/login-page/login-page.component";
import {SignUpPageComponent} from "../../../Page/sign-up-page/sign-up-page.component";

export const AuthenticationRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'sign',
    component:  SignUpPageComponent
  }
]
