import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DataDemoComponent } from './components/data-demo/data-demo.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { BookTicketComponent } from './components/book-ticket/book-ticket.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TicketPaymentComponent } from './components/ticket-payment/ticket-payment.component';


const routes: Routes = [{
  path: 'register',
  component: RegistrationComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'forgotPassword',
  component: ForgotPasswordComponent
},
{
  path: 'resetPassword/:token',
  component: ResetPasswordComponent
},
{
  path: 'data',
  component: DataDemoComponent
},
{
  path: '',
  component: DashBoardComponent
},
{
  path: 'homepage',
  component: HomepageComponent
},
{
  path: 'profile',
  component: MyProfileComponent
},
{
  path: 'movieDetail',
  component: MovieDetailsComponent
},
{
  path: 'categorie',
  component: CategoriesComponent
},
{
  path: 'bookTicket',
  component:BookTicketComponent
},
{
  path: 'movies',
  component:MoviesComponent
},
{
  path:'payment',
  component:TicketPaymentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
