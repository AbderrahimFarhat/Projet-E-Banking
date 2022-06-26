import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Creditor } from '../model/creditor';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  creditors : Creditor[]=[{"id":1,"title":"this is a title","description":"description here"}
  ,{"id":2,"title":"this is a title","description":"description here"},
  {"id":3,"title":"this is a title","description":"description here"}
  ,{"id":4,"title":"this is a title","description":"description here"},
  {"id":5,"title":"this is a title","description":"description here"}];
  constructor(private clientService:ClientService,private router:Router) {
    console.log(this.creditors);
    
    // this.clientService.getCreditors().subscribe(
    //   result=>{
    //     this.creditors=result;
    //   }
    // );
   }

  ngOnInit(): void {
  }
  paye(creditor:Creditor){
    this.clientService.creditor=creditor;
    this.router.navigate(["/paiment/payer"]);
  }
}
