import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = `${environment.apiUrl}/test`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * Public endpoint
   */
  getPublicContent(): Observable<string> {
    return this.http.get(API_URL + '/public', { responseType: 'text' });
  }

  /**
   * User endpoint (requires authentication)
   */
  getUserContent(): Observable<string> {
    return this.http.get(API_URL + '/user', { responseType: 'text' });
  }

  /**
   * Admin endpoint (requires ROLE_ADMIN)
   */
  getAdminContent(): Observable<string> {
    return this.http.get(API_URL + '/admin', { responseType: 'text' });
  }

  /**
   * Moderator endpoint (requires ROLE_MODERATOR)
   */
  getModeratorContent(): Observable<string> {
    return this.http.get(API_URL + '/moderator', { responseType: 'text' });
  }
}