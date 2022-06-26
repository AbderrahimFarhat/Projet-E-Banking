import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {
  public resetForm:FormGroup;
  constructor(private router: Router,private fb: FormBuilder) {
    this.resetForm = this.fb.group({
      password: new FormControl('',Validators.compose([Validators.required])),
      newPassword: new FormControl('',Validators.compose([Validators.required])),
      confirmedPassword: new FormControl('',Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
  }

  reset() {
    console.log(this.resetForm.value);
    this.router.navigate(['/', 'home']);
  }
}
