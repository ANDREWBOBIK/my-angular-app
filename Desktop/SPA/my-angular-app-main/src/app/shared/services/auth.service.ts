

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, delay, tap } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'auth_token'; 

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) { } 

  login(username: string, password: string): Observable<boolean> {
    return of(true).pipe(
      delay(1000), 
      tap(() => {
        const fakeToken = `header.payload.signature_jwt_token_${Math.random()}`;
        

        sessionStorage.setItem(this.tokenKey, fakeToken); 
        
        this.isAuthenticatedSubject.next(true); 
      })
    );
  }

  logout(): void {

    sessionStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']); 
  }

  getToken(): string | null {

    return sessionStorage.getItem(this.tokenKey);
  }

  hasToken(): boolean {

    return !!sessionStorage.getItem(this.tokenKey);
  }

  get isAuthenticated() {
    return this.hasToken();
  }
}