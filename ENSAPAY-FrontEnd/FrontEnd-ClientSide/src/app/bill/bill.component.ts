import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Bill } from '../model/bill';
import { Client } from '../model/client';
// @ts-ignore 
import * as html2pdf from 'html2pdf.js'; 
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bill:Bill;
  public myAccount!: Client;

  constructor(private clientService:ClientService,private popup:NgToastService) {
    this.myAccount=this.clientService.myAccount;
    this.bill=this.clientService.billToShow;
   }

  ngOnInit(): void {
  }
  exportToPdf(){
    const options ={
      filename:'Bill.pdf',
      image:{type:'jpeg'},
      html2canvas:{},
      jsPDF:{orientation:'landscape'}
    };
    html2pdf()
      .from(document.getElementById('bill'))
      .set(options)
      .save();
    this.popup.success({detail:"Success",summary:"Export successfully",duration:2500});
  }

}
function moment(date: Date | undefined) {
  throw new Error('Function not implemented.');
}

