import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  
  constructor() { }

  signOut(): void {
    localStorage.clear();
  }

  saveAccessToken(token: string): void {
    localStorage.removeItem('ACCESS_TOKEN_KEY');
    localStorage.setItem('ACCESS_TOKEN_KEY', token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('ACCESS_TOKEN_KEY');
  } 

  saveRefreshToken(token: string): void {
    localStorage.removeItem('REFRESH_TOKEN_KEY');
    localStorage.setItem('REFRESH_TOKEN_KEY', token);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('REFRESH_TOKEN_KEY');
  }

  saveUser(user: any): void {
    localStorage.removeItem('USER_KEY');
    localStorage.setItem('USER_KEY', JSON.stringify(user));
  }

  getUser(): any {
    const user = localStorage.getItem('USER_KEY');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
  
}
