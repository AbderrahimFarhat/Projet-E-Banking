import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Creditor } from '../model/creditor';
import { Unpaid } from '../model/unpaid';

@Component({
  selector: 'app-facture-form',
  templateUrl: './facture-form.component.html',
  styleUrls: ['./facture-form.component.css']
})
export class FactureFormComponent implements OnInit {

  creditor:Creditor={"id":0,"description":'',"img":'',"title":''};
  json:any=[{"amount":1000,"description":"dcfgvhbjnk","id":1},
  {"amount":3000,"description":"nbjnb","id":2}];
  unpaidBill:Unpaid[]=[];
  unpaidBillTemp:Unpaid[]=[];
  payedBillId:number[];
  totale:number=0;
  constructor(private clientService:ClientService,private route:Router) {
    this.creditor=this.clientService.creditor;
    this.unpaidBill=this.json;
    this.unpaidBillTemp=this.json;
    this.payedBillId=[];
    console.log(this.unpaidBillTemp);
    this.clientService.getUnpaids().subscribe(
      result=>{
        this.unpaidBill=this.json;
        
      }
    )
 
   }

  ngOnInit(): void {
  }
  removeFromArray(id:number){
    this.unpaidBillTemp.forEach((unpaid,index) => {
      if(unpaid.id==id){
        this.unpaidBillTemp.splice(index,1);
      }
    });
    this.unpaidBill;
  }
  onChecked(unpaid:Unpaid){
    this.totale=this.totale+unpaid.amount;
    this.payedBillId.push(unpaid.id);
    unpaid.state=true;
  }
  unChecked(unpaid:Unpaid){
    this.totale=this.totale-unpaid.amount;
    this.payedBillId.forEach((element,index)=>{
      if(element==unpaid.id) this.payedBillId.splice(index,1);
   });
   console.log(this.payedBillId);
   
    unpaid.state=false;
  }
  paye(){
    this.clientService.payeBill(this.payedBillId,this.creditor.id).subscribe(result=>{
      console.log("success");
      this.route.navigate(["/paiment/facture"]);
    })
  }
}
