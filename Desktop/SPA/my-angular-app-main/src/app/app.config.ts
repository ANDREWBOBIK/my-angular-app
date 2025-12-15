// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; 

import { routes } from './app.routes';
import { baseUrlInterceptor } from './shared/interceptors/base-url.interceptor';
import { errorInterceptor } from './shared/interceptors/error.interceptor';
import { authInterceptor } from './shared/interceptors/auth.interceptor'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    
    provideHttpClient(
      withInterceptors([
        baseUrlInterceptor,
        errorInterceptor,
        authInterceptor // *** ДОДАНО ***
      ])
    ),
  ]
};