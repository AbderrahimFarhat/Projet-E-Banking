import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {
  public resetForm:FormGroup;
  constructor(private router: Router,private authService:AuthService,private fb: FormBuilder) {
    this.resetForm = this.fb.group({
      password: '',
      newPassword:'',
      confirmedPassword:''
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
        },
        error => {
          console.log("error");
          
        }
      );
    }else{
      console.log("resetForm ");
      
    }
  }
}
