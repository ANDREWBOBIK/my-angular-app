import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router'; // *** Додано RouterLink ***

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink 
  ],
  template: `
    <div style="padding: 20px;">
      <h1>📚 Список Мов Програмування</h1>
      
      <a routerLink="/items/add" class="add-button" 
         style="display: inline-block; padding: 10px 20px; margin-bottom: 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">
        + Додати Мову
      </a>
      
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: [] 
})
export class AppComponent {
  title = 'Programming Languages App';
}