import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;
  constructor(private router: Router,private authService:AuthService,private fb: FormBuilder,private popup:NgToastService) {
    this.loginForm = this.fb.group({
      username: '',
      password:''
    });
   }
  ngOnInit(): void {
  }

  authentication(){
    this.authService.login(this.loginForm.value).subscribe(
      result => {
        console.log("/login");
        this.authService.setToken(result.token);
        this.authService.setIsPwdChanged(result.passwordChanged);
        if(this.authService.isPasswordChanged()){
          this.router.navigate(['/', 'home']);
          this.popup.success({detail:"Success",summary:"Logged successfully please reset your password !!",duration:2500});
          
        }else{
          this.router.navigate(['/', 'resetPassword']);
          this.popup.info({detail:"Error",summary:"You need to change your password first",duration:2500});
        }
        },
        error => {
          console.log("error");
          this.popup.error({detail:"Error",summary:"Something wrong",duration:2500});
        }
    );
  }


}
