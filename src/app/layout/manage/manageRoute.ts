import {ManageComponent} from "./manage/manage.component";
import {Routes} from "@angular/router";
import {ManagePageComponent} from "../../Page/manage-page/manage-page.component";

export const  manageRoute: Routes = [
  {
    path: 'manage',
    component: ManagePageComponent
  }
]
