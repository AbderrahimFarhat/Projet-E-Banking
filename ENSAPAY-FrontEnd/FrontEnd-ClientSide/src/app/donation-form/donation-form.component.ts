import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ClientService } from '../client.service';
import { Creditor } from '../model/creditor';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
})
export class DonationFormComponent implements OnInit {
  public form:FormGroup;
  donation:Creditor={
    "id": 0, "description": '', "logo": '', "title": '',
    "type": ''
  };
  constructor(private router: Router,private fb: FormBuilder,private clientService:ClientService,private route:Router,private popup:NgToastService) {
    this.form = this.fb.group({
      amount: new FormControl('',Validators.required)
    });
    this.donation=this.clientService.creditorDonation;
   }
  ngOnInit(): void {
  }
  pay() {
    if(this.form.valid){
      this.clientService.charity(this.form.get("amount")?.value,this.donation.id).subscribe(result=>{
        this.route.navigate(["/payment/verification"],{queryParams:{id:result}});
        this.popup.success({detail:"Success",summary:"Logged successfully please reset your password !!",duration:2500});
      },
      error=>{
        this.popup.error({detail:"Error",summary:"Error",duration:2500});
      })

    }else{
      this.popup.error({detail:"Error",summary:"Empty Fields",duration:2500});
    }
    
    
  }

}
