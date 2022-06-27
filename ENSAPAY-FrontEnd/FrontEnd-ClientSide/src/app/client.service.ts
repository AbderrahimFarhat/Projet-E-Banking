import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bill } from './model/bill';
import { Client } from './model/client';
import { Creditor } from './model/creditor';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  host=environment.host;
  public myAccount!: Client;
  public billToShow!: Bill;
  creditor:Creditor={
    "id": 0, "description": '', "logo": '', "title": '',
    "type": ''
  };
  bill?:Bill;
  creditorDonation:Creditor={
    "id": 0, "description": '', "logo": '', "title": '',
    "type": ''
  };
  constructor(private http: HttpClient) {}

  getMe():Observable<any>{
    return this.http.get<any>(this.host+'/api/me');
  }
  generateUnpaid():Observable<any>{
    return this.http.post<any>(this.host+'/api/me/generate-unpaid','');
  }
  verifyBill(id:string,code:string):Observable<any>{
    return this.http.post<any>(this.host+'/api/bills/'+id+'/verify',code);
  }

  getHistoric():Observable<any>{
    return this.http.get<any>(this.host+'/api/me/history');
  }
  getCreditors():Observable<any>{
    return this.http.get<any>(this.host+'/api/client/creditors');
  } 
  getUnpaid(id:number):Observable<any>{
    return this.http.get<any>(this.host+'/api/client/creditors/'+id+'/unpaid');
  }
  createBill(tableId:any,id:number):Observable<any>{
    return this.http.post<any>(this.host+'/api/client/creditors/'+id+'/bill',tableId);
  }
  charity(amount:any,id:number):Observable<any>{
    return this.http.post<any>(this.host+'/api/client/creditors/'+id+'/charity?amount='+amount,'');
  }
}
