import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Creditor } from '../model/creditor';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
})
export class DonationFormComponent implements OnInit {
  public form:FormGroup;
  donation:Creditor={"id":0,"description":'',"img":'',"title":''};
  constructor(private router: Router,private fb: FormBuilder,private clientService:ClientService) {
    this.form = this.fb.group({
      id: this.donation.id,
      amount: ''
    });
    this.donation=this.clientService.creditorDonation;
   }
  ngOnInit(): void {
  }
  paye() {
    console.log(this.form.value);
    
  }

}
