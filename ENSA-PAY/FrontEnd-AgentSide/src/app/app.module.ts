import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { ClientTableComponent } from './client-table/client-table.component';
import { CreateClientFormComponent } from './create-client-form/create-client-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestComponent } from './request/request.component';
import { AuthGuard } from './auth.guard';
import { ResetPasswordGuard } from './reset-password.guard';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ResetPwdComponent,
    NavBarComponent,
    LoginComponent,
    ClientTableComponent,
    CreateClientFormComponent,
    NotFoundComponent,
    RequestComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'resetPassword',
        component: ResetPwdComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'home',
        component: HomeComponent,
        canActivate:[AuthGuard,ResetPasswordGuard],
        children:[
          {
            path:'',
            component: ClientTableComponent,
            canActivate:[AuthGuard,ResetPasswordGuard]
          },
          {
            path:'createClient',
            component: CreateClientFormComponent,
            canActivate:[AuthGuard,ResetPasswordGuard]
          },
          {
            path:'requests',
            component: RequestComponent,
            canActivate:[AuthGuard,ResetPasswordGuard]
          }
        ]
      },
      {
        path:'',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path:'**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
