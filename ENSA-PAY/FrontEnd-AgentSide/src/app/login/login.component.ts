import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
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

  // login() {
  //   if(this.loginForm.get('username')?.value == "admin" && this.loginForm.get('password')?.value=="admin123"){
  //     localStorage.setItem("tokken", '$2a$10$JMKUFnY.kpd2J8Tzkd5GAeIx5SVTiFCe73LudMaOHMFI5l3B05eK2');
  //     this.authService.setIsPwdChanged(false);
  //     if(true){
  //       this.router.navigate(['/', 'home']);
  //     }else{
  //       this.router.navigate(['/', 'resetPassword']);
  //     }
  //   }
  // }

  authentication(){
    this.authService.login(this.loginForm.value).subscribe(
      result => {
        console.log("/login");
        console.log(result);
        this.authService.setToken(result["tokken"]);
        this.popup.success({detail:"Success",summary:"Logged successfully",duration:2500});
        this.authService.setIsPwdChanged(result["passwordChanged"]);
        if(this.authService.isPasswordChanged()){
          this.router.navigate(['/', 'home']);
        }else{
          this.popup.success({detail:"Success",summary:"Logged successfully please reset your password !!",duration:2500});
          this.router.navigate(['/', 'resetPassword']);
        }
        },
        error => {
          console.log("error");
          this.popup.error({detail:"Error",summary:"Something wrong",duration:2500});
        }
    );
  }


}
