import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DataDemoComponent } from './components/data-demo/data-demo.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HomepageComponent } from './components/homepage/homepage.component';


const routes: Routes = [{
  path:'register',
  component:RegistrationComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'forgotPassword',
  component:ForgotPasswordComponent
},
{
  path:'resetPassword/:token',
  component:ResetPasswordComponent
},
{
  path:'data',
  component:DataDemoComponent
},
{
  path:'',
  component:DashBoardComponent
},
{
  path:'homepage',
  component:HomepageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
