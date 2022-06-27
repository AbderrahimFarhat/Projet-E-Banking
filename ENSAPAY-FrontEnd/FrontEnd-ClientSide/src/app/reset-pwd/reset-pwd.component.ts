import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {
  public resetForm:FormGroup;
  constructor(private router: Router,private authService:AuthService,private fb: FormBuilder,private popup:NgToastService) {
    this.resetForm = this.fb.group({
      password: new FormControl('',Validators.required),
      newPassword:new FormControl('',Validators.required),
      confirmedPassword:new FormControl('',Validators.required)
    });
   }
  ngOnInit(): void {
  }
  checkPwd():boolean{
    return this.resetForm.get("newPassword")?.value==this.resetForm.get("confirmedPassword")?.value;
  }
  submit(){
    if(this.resetForm.valid&&this.checkPwd())
    {
      this.authService.resetPwd(this.resetForm.get("newPassword")?.value).subscribe(
        result => {
          this.authService.setIsPwdChanged(true);
          this.router.navigate(['/', 'home']);
          this.popup.success({detail:"Success",summary:"Logged successfully please reset your password !!",duration:2500});
        },
        error => {
          console.log("error");
          this.popup.error({detail:"Error",summary:"Something wrong",duration:2500});
        }
      );
    }else{
      console.log("resetForm ");
      this.popup.error({detail:"Error",summary:"Something wrong",duration:2500});
      
    }
  }
}
