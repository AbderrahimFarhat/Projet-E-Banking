import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastModule } from 'ng-angular-popup';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;
  constructor(private router: Router,private authService:AuthService,private fb: FormBuilder,private popup:NgToastModule) {
    this.loginForm = this.fb.group({
      username: '',
      password:''
    });
   }
  ngOnInit(): void {
  }

  login() {
    if(this.loginForm.get('username')?.value == "admin" && this.loginForm.get('password')?.value=="admin123"){
      this.router.navigate(['/', 'home']);
    }
  }

  authentication(){
    this.authService.login(this.loginForm.value).subscribe(
      result => {
        console.log("/login");
        console.log(result);
        this.authService.setToken(result["tokken"]);
        this.authService.setIsPwdChanged(result["passwordChanged"]);
        if(this.authService.isPasswordChanged()){
          this.router.navigate(['/', 'home']);
        }else{
          this.router.navigate(['/', 'resetPassword']);
        }
        },
        error => {
          console.log("error");
        }
    );
  }


}
