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
  creditor:Creditor={"id":0,"description":'',"img":'',"title":''};
  bill?:Bill;
  creditorDonation:Creditor={"id":0,"description":'',"img":'',"title":''};
  constructor(private http: HttpClient) {}

  getMe():Observable<any>{
    return this.http.get<any>(this.host+'/api/client/me');
  }

  getHistoric():Observable<any>{
    return this.http.get<any>(this.host+'/api/historic');
  }
  getCreditors():Observable<any>{
    return this.http.get<any>(this.host+'/api/creditors');
  }
  getCreditorsDonation():Observable<any>{
    return this.http.get<any>(this.host+'/api/creditors');
  }
  getUnpaids():Observable<any>{
    return this.http.get<any>(this.host+'/api/unpaids');
  }
  payeBill(tableId:any,id:number):Observable<any>{
    return this.http.get<any>(this.host+'/api/client/creditors/'+id+'/bill',tableId);
  }
}
