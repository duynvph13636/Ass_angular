import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { authSignup, TypeLogin, TypeLoginResponse } from 'src/types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  CreateAuth(data:authSignup):Observable<authSignup>{
    return this.http.post<authSignup>(`${environment.signup}`,data);
  };
  login(data:TypeLogin):Observable<TypeLoginResponse>{
    return this.http.post<TypeLoginResponse>(`${environment.signin}`,data)
  }

}
