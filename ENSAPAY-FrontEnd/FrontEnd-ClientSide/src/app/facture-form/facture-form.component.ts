import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ClientService } from '../client.service';
import { Creditor } from '../model/creditor';
import { Unpaid } from '../model/unpaid';

@Component({
  selector: 'app-facture-form',
  templateUrl: './facture-form.component.html',
  styleUrls: ['./facture-form.component.css']
})
export class FactureFormComponent implements OnInit {

  creditor:Creditor={
    "id": 0, "description": '', "logo": '', "title": '',
    "type": ''
  };
  unpaidBill:Unpaid[]=[];
  unpaidBillTemp:Unpaid[]=[];
  payedBillId:number[];
  totale:number=0;
  constructor(private clientService:ClientService,private route:Router,private popup:NgToastService) {
    this.creditor=this.clientService.creditor;
    this.payedBillId=[];
    console.log(this.unpaidBillTemp);
    this.clientService.getUnpaid(this.creditor.id).subscribe(
      result=>{
        this.unpaidBill=result;
        this.unpaidBillTemp=result;
        
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
  }
  onChecked(unpaid:Unpaid){
    this.totale=this.totale+unpaid.amount;
    this.payedBillId.push(unpaid.id);
    unpaid.state=false;
  }
  unChecked(unpaid:Unpaid){
    this.totale=this.totale-unpaid.amount;
    this.payedBillId.forEach((element,index)=>{
      if(element==unpaid.id) this.payedBillId.splice(index,1);
   });
   console.log(this.payedBillId);
    unpaid.state=true;
  }
  paye(){
    if(this.payedBillId.length!==0)
    {
      this.clientService.createBill(this.payedBillId,this.creditor.id).subscribe(result=>{
        console.log("success");
        this.route.navigate(["/payment/verification"],{queryParams:{id:result}});
      })
    }else{
      this.popup.error({detail:"Error",summary:"Please select unpaid",duration:2500});
    }
  }
}
