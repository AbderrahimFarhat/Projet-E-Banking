import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host=environment.host;
  constructor(private http: HttpClient) {
    if(localStorage.getItem("token")!=null){
      const token = localStorage.getItem("token");
      this._token = token !== null ? token : "";
      this.setToken(this._token);
    }
  }
  private isPwdChanged=false;
  private _token: string='';
  setToken(value:string){
    this._token=value;
    localStorage.setItem("token",value);
  }
  getToken():string{
    return this._token;
  }
  login(data:any):Observable<any>{
    return this.http.post<any>(this.host+'/login',data);
  }
  resetPwd(pwd:string):Observable<any>{
    return this.http.post<any>(this.host+'/api/client/change-password?new-password='+pwd,'');
  }
  setIsPwdChanged(state:any){
    this.isPwdChanged=state;
    localStorage.setItem("state",state);
  }
  isLoggedIn(): boolean{
    return !!localStorage.getItem("token");
  }
  isPasswordChanged(): boolean{
    return this.isPwdChanged;
  }
  register(data:any):Observable<any>{
    return this.http.post<any>(this.host+'/api/client/create-request',data);
  }
}

