import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./layout/AuthLayout/auth/auth.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ManageComponent} from "./layout/manage/manage/manage.component";


const  appRoutes: Routes = [
  {
    path: '',
    component : AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/AuthLayout/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path:'',
    component : ManageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>import('./layout/manage/manage.module').then(m=> m.ManageModule)
      }
    ]
  }
]

@NgModule(
  {
    imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [

    ]
  }
)

 export  class  appRoute {

 }
