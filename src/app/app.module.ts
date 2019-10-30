import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DataDemoComponent } from './components/data-demo/data-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { MatIconModule } from '@angular/material/icon';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SliderModule } from 'angular-image-slider';
import { SlideshowModule } from 'ng-simple-slideshow';
import { IconsModule } from 'angular-bootstrap-md';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MatTableModule } from '@angular/material/table';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { MatDialogModule } from '@angular/material/dialog';
//import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { ButtonsModule, InputsModule } from 'angular-bootstrap-md';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { ShareButtonModule } from '@ngx-share/button';


import { ShareModule } from '@ngx-share/core';

import { environment } from '../environments/environment';
import { TrailerDialogComponent } from './components/trailer-dialog/trailer-dialog.component';
import { BookTicketComponent } from './components/book-ticket/book-ticket.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TicketPaymentComponent } from './components/ticket-payment/ticket-payment.component'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DataDemoComponent,
    DashBoardComponent,
    HomepageComponent,
    MyProfileComponent,
    MovieDetailsComponent,
    CategoriesComponent,
    NewReleasesComponent,
    TrailerDialogComponent,
    BookTicketComponent,
    MoviesComponent,
    TicketPaymentComponent,
  ],

  entryComponents: [TrailerDialogComponent],

  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    SlideshowModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    SliderModule,
    IconsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule,
    ButtonsModule,
    InputsModule,
    ShareButtonsModule,
    ShareModule,
    ShareButtonModule
    //NgZorroAntdModule,
    // NZ_I18N,
    // en_US

  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: environment.baseUrl1 }),
      cache: new InMemoryCache()
    });
  }
}