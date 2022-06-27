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
  creditors : Creditor[]=[];
  creditorsTemp : Creditor[]=[];
  constructor(private clientService:ClientService,private router:Router) {
    console.log(this.creditors);
    
    this.clientService.getCreditors().subscribe(
      result=>{
        this.creditorsTemp=result;
        for(let i=0 ; i< this.creditorsTemp.length; i++){
          if(this.creditorsTemp[i].type==="Creditor"){
            this.creditors.push(this.creditorsTemp[i]);
          }
        }        
      }
    );
   }

  ngOnInit(): void {
  }
  pay(creditor:Creditor){
    this.clientService.creditor=creditor;
    this.router.navigate(["/payment/payer"]);
  }
}
