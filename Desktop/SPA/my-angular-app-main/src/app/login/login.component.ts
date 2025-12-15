// src/app/login/login.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  // Зверніть увагу на .component.html та .component.css
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { // *** ВИКОРИСТОВУЄМО ЗВИЧАЙНИЙ EXPORT ***

  loginForm!: FormGroup;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      
      this.authService.login(username, password).subscribe({
        next: () => {
          console.log('Login successful');
          this.router.navigate(['/items']); 
        },
        error: (err) => {
          alert('Невірний логін або пароль.');
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}