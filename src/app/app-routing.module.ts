import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
