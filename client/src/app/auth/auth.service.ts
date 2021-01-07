import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private login_url = "http://localhost:8000/api/user/token/"
  private register_url = "http://localhost:8000/api/user/create/"

  constructor(private http: HttpClient) {}

  registerUser(user) {
    return this.http.post<any>(this.register_url, user)
  }

  loginUser(user) {
    return this.http.post<any>(this.login_url, user)
  }
}