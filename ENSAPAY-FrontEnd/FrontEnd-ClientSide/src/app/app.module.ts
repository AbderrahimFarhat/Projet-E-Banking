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
import { ClientTableComponent } from './client-table/client-table.component';
import { CreateClientFormComponent } from './create-client-form/create-client-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FactureComponent } from './facture/facture.component';
import { RechargeComponent } from './recharge/recharge.component';
import { DonationComponent } from './donation/donation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaimentHomeComponent } from './paiment-home/paiment-home.component';
import { FactureFormComponent } from './facture-form/facture-form.component';
import { DonationFormComponent } from './donation-form/donation-form.component';
import { FooterComponent } from './footer/footer.component';
import { NgToastModule } from 'ng-angular-popup';
import { AuthGuard } from './auth.guard';
import { TokenInterceptor } from './token.interceptor';
import { BillComponent } from './bill/bill.component';
import { ResetPasswordGuard } from './reset-password.guard';
import { VerifyComponent } from './verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,
    ResetPwdComponent,
    NavBarComponent,
    CreateAgentFormComponent,
    LoginComponent,
    AgentTableComponent,
    ClientTableComponent,
    CreateClientFormComponent,
    NotFoundComponent,
    RegisterComponent,
    HomeComponent,
    FactureComponent,
    RechargeComponent,
    DonationComponent,
    PaimentHomeComponent,
    FactureFormComponent,
    DonationFormComponent,
    FooterComponent,
    BillComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'register',
        component: RegisterComponent
      },
      {
        path:'resetPassword',
        component: ResetPwdComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'payment',
        component: PaimentHomeComponent,
        canActivate:[AuthGuard,ResetPasswordGuard],
        children:[
          {
            path:'facture',
            component: FactureComponent,
            canActivate:[AuthGuard,ResetPasswordGuard],
            
          },
          {
            path:'donation',
            component: DonationComponent,
            canActivate:[AuthGuard,ResetPasswordGuard],
          },
          {
            path:'recharge',
            component: RechargeComponent,
            canActivate:[AuthGuard,ResetPasswordGuard],
          },
          {
            path:'payer',
            component: FactureFormComponent,
            canActivate:[AuthGuard,ResetPasswordGuard],
          },
          {
            path:'don',
            component: DonationFormComponent,
            canActivate:[AuthGuard,ResetPasswordGuard],
          },
          {
            path:'bill',
            component: BillComponent,
            canActivate:[AuthGuard,ResetPasswordGuard],
          },
          {
            path:'verification',
            component: VerifyComponent,
            canActivate:[AuthGuard,ResetPasswordGuard]
          }
        ]
      },
      {
        path:'home',
        component: HomeComponent,
        canActivate:[AuthGuard,ResetPasswordGuard],
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
