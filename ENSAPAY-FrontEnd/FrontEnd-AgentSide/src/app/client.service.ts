import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  host = environment.host;
  constructor(private http:HttpClient) { }
  getClients():Observable<any>{
    return this.http.get<any>(this.host+'/api/agent/related-clients');
  }

  postClient(data:any):Observable<any>{
    return this.http.post<any>(this.host+'/api/add-client',data);
  }
  getRequest():Observable<any>{
    return this.http.get<any>(this.host+'/api/get-requests');
  }

  acceptOrRefuseRequest(id:number,status:boolean):Observable<any>{
    return this.http.post<any>(this.host+'/api/request',{'demandeId':id,"status":status});
  }
}
