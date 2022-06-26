import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../model/client';
import { Creditor } from '../model/creditor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public client!: Client;
  public historicBill: Creditor[]=[{"id":0,"description":'k,lkj',"img":'lk,',"title":'ljnkm',"type":"all"},
  {"id":1,"description":'k,lkj',"img":'lk,',"title":'ljnkm',"type":"recharge"},
  {"id":2,"description":'k,lkj',"img":'lk,',"title":'ljnkm',"type":"all"}];
  public historicBillTemp: Creditor[]=[];
  public filterForm:FormGroup;
  constructor(private fb: FormBuilder,private clientService:ClientService) {
    this.filterForm = this.fb.group({
      filter: ''
    });
    // this.clientService.getMe().subscribe(result=>{
    //   console.log(result);
    //   this.client=result;
      
    // });
    // this.clientService.getHistoric().subscribe(result=>{
    //   console.log(result);
    //   this.historicBill=[{"id":0,"description":'k,lkj',"img":'lk,',"title":'ljnkm'},
    //   {"id":1,"description":'k,lkj',"img":'lk,',"title":'ljnkm'},
    //   {"id":2,"description":'k,lkj',"img":'lk,',"title":'ljnkm'}];
    // });
    this.historicBillTemp=this.historicBill;
    console.log(this.historicBill);
  }
  onChange(deviceValue:any) {
    if(deviceValue.target.value=="all"){
      this.historicBillTemp=this.historicBill;
    }else{
      this.historicBillTemp=[];
      for(let i=0 ; i< this.historicBill.length; i++){
        if(this.historicBill[i].type==deviceValue.target.value){
          this.historicBillTemp.push(this.historicBill[i]);
        }
      }
    }
    
    console.log(deviceValue.target.value);
    console.log(this.historicBillTemp);
}
  ngOnInit(): void {
  }


}
