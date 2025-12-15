// src/app/header/header.ts (або header.component.ts)

import { Component, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; 
import { Observable } from 'rxjs'; 

import { AuthService } from '../shared/services/auth.service'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './header.html', 
  styleUrls: ['./header.css'] 
})
export class HeaderComponent {
  
  private authService = inject(AuthService); 

  isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;

  onLogout(): void {
    this.authService.logout(); 
  }
}