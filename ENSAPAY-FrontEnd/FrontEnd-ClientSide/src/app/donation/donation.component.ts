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

  donations : Creditor[]=[];
  donationsTemp : Creditor[]=[];
  constructor(private clientService:ClientService,private router:Router) {
    console.log(this.donations);
    this.clientService.getCreditors().subscribe(
      result=>{
        this.donationsTemp=result;
        for(let i=0 ; i< this.donationsTemp.length; i++){
          if(this.donationsTemp[i].type==="Charity"){
            this.donations.push(this.donationsTemp[i]);
          }
        } 
      }
    );
   }

  ngOnInit(): void {
  }
  paye(creditor:Creditor){
    this.clientService.creditorDonation=creditor;
    this.router.navigate(["/payment/don"]);
  }

}
