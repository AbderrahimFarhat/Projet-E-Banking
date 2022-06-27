import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-create-client-form',
  templateUrl: './create-client-form.component.html',
  styleUrls: ['./create-client-form.component.css']
})
export class CreateClientFormComponent implements OnInit {
  public clientForm:FormGroup;
  constructor(private router: Router,private clientService:ClientService,private fb: FormBuilder,private popup:NgToastService) {
    this.clientForm = this.fb.group({
      accountType: '',
      lastName:'',
      firstName:'',
      phone:'',
      email:''
    });
   }
  ngOnInit(): void {
  }
  addClient(){
    if(this.clientForm.valid){
      this.clientService.postClient(this.clientForm.value).subscribe(data => {
        this.router.navigate(['/', 'home']);
        this.popup.success({detail:"Success",summary:"Client added successfully",duration:2500});
      });
    }else{
      this.popup.error({detail:"Error",summary:"Please fill all fields",duration:2500});
    }
  }

}
