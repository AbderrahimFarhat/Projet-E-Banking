import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  host = environment.host;
  constructor(private http:HttpClient,private authService:AuthService) { }

  getAgents():Observable<any>{
    return this.http.get<any>(this.host+'/api/agents');
  }

  postAgent(data:any):Observable<any>{
    return this.http.post<any>(this.host+'/api/add-agent',data);
  }
}
