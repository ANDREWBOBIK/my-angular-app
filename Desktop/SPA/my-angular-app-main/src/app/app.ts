import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
  ],
  template: `
    <div style="padding: 20px;">
      <h1>📚 Мови Програмування</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: [] 
})
export class AppComponent {
  title = 'Programming Languages App';
}