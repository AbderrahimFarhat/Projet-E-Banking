import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      username: new FormControl('',Validators.compose([Validators.required])),
      password: new FormControl('',Validators.compose([Validators.required])),
      role:'ADMIN'
    });
   }
  ngOnInit(): void {
  }

  // login() {
  //   if(this.loginForm.get('username')?.value == "admin" && this.loginForm.get('password')?.value=="admin123"){
  //     this.popup.success({detail:"Success",summary:"This message",duration:2500});
  //     localStorage.setItem("token", '$2a$10$JMKUFnY.kpd2J8Tzkd5GAeIx5SVTiFCe73LudMaOHMFI5l3B05eK2');
  //     this.router.navigate(['/', 'home']);
  //   }else{
  //     this.popup.error({detail:"Error",summary:"This message",duration:2500});
  //   }
  // }
  authentication(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(
        result => {
        console.log("/login");
        this.authService.setToken(result.token);
        this.popup.success({detail:"Success",summary:"Logged successfully",duration:2500});
        this.router.navigate(['/', 'home']);
        },
        error => {
          console.log("error");
          this.popup.error({detail:"Error",summary:"Something wrong",duration:2500});
        }
        
        );
    }else{
      this.popup.error({detail:"Error",summary:"Empty Fields",duration:2500});
    }
  }

}
