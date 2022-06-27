import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm:FormGroup;
  constructor(private router: Router,private authService:AuthService,private fb: FormBuilder,private popup:NgToastService) {
    this.registerForm = this.fb.group({
      accountType: new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      firstName:new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required)
    });
   }
  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe(data => {
        this.router.navigate(['/', 'login']);
        this.popup.success({detail:"Success",summary:"Your request was sent successfully",duration:2500});
      },error=>{
        this.popup.error({detail:"Error",summary:"Something went wrong",duration:2500});
      });
    }else{
      console.log("error");
      this.popup.error({detail:"Error",summary:"Empty Fields",duration:2500});
    }
  }

  sendRequestToAgent(){
    this.authService.register(this.registerForm.value).subscribe(
      data => {
        this.router.navigate(['/','home']);
      
      }
      );
  }
}
