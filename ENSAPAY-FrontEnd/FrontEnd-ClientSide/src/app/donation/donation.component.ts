import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Creditor } from '../model/creditor';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  donations : Creditor[]=[{"id":1,"title":"this is a title","description":"description here"}
  ,{"id":2,"title":"this is a title","description":"description here"},
  {"id":3,"title":"this is a title","description":"description here"}
  ,{"id":4,"title":"this is a title","description":"description here"},
  {"id":5,"title":"this is a title","description":"description here"}];
  constructor(private clientService:ClientService,private router:Router) {
    console.log(this.donations);
   }

  ngOnInit(): void {
  }
  paye(creditor:Creditor){
    this.clientService.creditorDonation=creditor;
    this.router.navigate(["/paiment/don"]);
  }

}
