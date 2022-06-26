import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm:FormGroup;
  constructor(private router: Router,private authService:AuthService,private fb: FormBuilder,) {
    this.registerForm = this.fb.group({
      AccountType: '',
      lastName:'',
      firstName:'',
      phone:'',
      email:''
    });
   }
  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe(data => {
        this.router.navigate(['/', 'home']);
      });
    }else{
      console.log("error");
      
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
