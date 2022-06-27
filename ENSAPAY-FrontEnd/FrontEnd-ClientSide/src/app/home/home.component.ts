import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Bill } from '../model/bill';
import { Client } from '../model/client';
import { Creditor } from '../model/creditor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public client: Client = new Client;
  public historicBill: Bill[]=[];
  public historicBillTemp: Bill[]=[];
  public filterForm:FormGroup;
  constructor(private fb: FormBuilder,private clientService:ClientService,private router:Router) {
    this.filterForm = this.fb.group({
      filter: ''
    });
    this.clientService.getMe().subscribe(result=>{
      console.log(result);
      this.client=result;
      
    });
    this.clientService.getHistoric().subscribe(result=>{
      console.log(result);
      this.historicBill=result;
      this.historicBillTemp=result;
    });
    
  }
  onChange(deviceValue:any) {
    if(deviceValue.target.value=="all"){
      this.historicBillTemp=this.historicBill;
    }else{
      this.historicBillTemp=[];
      for(let i=0 ; i< this.historicBill.length; i++){
        console.log(this.historicBill[i].creditor?.type);
        if(this.historicBill[i].creditor?.type==deviceValue.target.value){
          this.historicBillTemp.push(this.historicBill[i]);
        }
      }
    }
    console.log(deviceValue.target.value);
    console.log(this.historicBillTemp);
  }
  showBill(bill:Bill){
    this.clientService.billToShow=bill;
    this.router.navigate(['/payment/bill'])
  }
  ngOnInit(): void {
  }


}
