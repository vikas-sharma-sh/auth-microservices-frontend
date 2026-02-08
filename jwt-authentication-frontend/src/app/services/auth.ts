import { Injectable } from '@angular/core';
import { env } from 'process';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtResponse, LoginRequest, MessageResponse, RefreshTokenRequest, SignupRequest } from '../models/auth.model';
import { Observable } from 'rxjs';



const Auth_API = `${environment.apiUrl}/auth/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private http : HttpClient) { }

  login(credentials: LoginRequest):Observable<JwtResponse> {  
    return this.http.post<JwtResponse>(
      `${Auth_API}/login`,
      credentials,
      httpOptions

    );
  }

  signup(User:SignupRequest):Observable<MessageResponse>{
    return this.http.post<MessageResponse>(
      `${Auth_API}/signup`,
      User,
      httpOptions
    );  
  }

  refreshToken(request:RefreshTokenRequest):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(
      `${Auth_API}/refresh`,
      request,
      httpOptions
    );
  }

  logout():Observable<MessageResponse>{
    return this.http.post<MessageResponse>(
      `${Auth_API}/logout`,
      {},
      httpOptions
    );
  }
}
