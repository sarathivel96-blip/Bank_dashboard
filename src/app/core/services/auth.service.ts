import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = signal<string | null>('mock-jwt-token');
  private role = signal <'ADMIN' | 'OPERATOR'>('OPERATOR');

  getToken(){
    return this.token();
  }
  getRole(){
    return this.role();
  }
  iaAuthenticated(){
    return !this.token();
  }
}

