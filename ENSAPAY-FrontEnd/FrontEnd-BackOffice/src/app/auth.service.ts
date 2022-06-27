import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private host =environment.host;
  private _token: string='';
  
  constructor(private http: HttpClient) {
    if(localStorage.getItem("token")!=null){
      const token = localStorage.getItem("token");
      this._token = token !== null ? token : "";
      this.setToken(this._token);
      
    }
  }
  setToken(value:string){
    this._token=value;
    localStorage.setItem("token",value);
  }
  getToken():string{
    return this._token;
  }
  
  login(data:any):Observable<any>
  {
    return this.http.post<any>(this.host+'/login',data);
  }

  isLoggedIn(): boolean
  {
    return !!localStorage.getItem("token");
  }
}

