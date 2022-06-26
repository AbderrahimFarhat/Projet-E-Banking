import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private isPwdChanged=false;
  private host =environment.host;
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
    return this.http.post<any>(this.host+'/api/agent/change-password',{"newPassword":pwd});
  }
  setIsPwdChanged(state:boolean){
    this.isPwdChanged=state;
  }
  isLoggedIn(): boolean{
    return !!localStorage.getItem("token");
  }
  isPasswordChanged(): boolean{
    return this.isPwdChanged;
  }
}

