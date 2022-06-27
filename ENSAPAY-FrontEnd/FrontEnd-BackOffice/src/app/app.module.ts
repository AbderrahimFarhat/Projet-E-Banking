import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateAgentFormComponent } from './create-agent-form/create-agent-form.component';
import { LoginComponent } from './login/login.component';
import { AgentTableComponent } from './agent-table/agent-table.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { NgToastModule } from 'ng-angular-popup';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TokkenInterceptor } from './tokken.interceptor';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ResetPwdComponent,
    NavBarComponent,
    CreateAgentFormComponent,
    LoginComponent,
    AgentTableComponent,
    NotFoundComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'home',
        component: HomeComponent,
        canActivate:[AuthGuard],
        children:[
          {
            path:'',
            component: AgentTableComponent,
            canActivate:[AuthGuard]
          },
          {
            path:'createAgent',
            component: CreateAgentFormComponent,
            canActivate:[AuthGuard]
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
      useClass: TokkenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
