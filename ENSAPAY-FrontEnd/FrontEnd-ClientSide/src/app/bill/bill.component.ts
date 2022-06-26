import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Bill } from '../model/bill';
import { Client } from '../model/client';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bill?:Bill;
  public myAccount!: Client;

  constructor(private clientService:ClientService) {
    this.bill=this.clientService.bill;
    this.myAccount=this.clientService.myAccount;
   }

  ngOnInit(): void {
  }

}
