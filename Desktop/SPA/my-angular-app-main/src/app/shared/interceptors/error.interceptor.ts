import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => { 
      let errorMessage = 'Сталася невідома помилка!';

      
      if (error instanceof HttpErrorResponse) {
        if (error.status === 0) {
         
          errorMessage = 'Відсутнє з’єднання з сервером (перевірте localhost:3000).';
        } else {
          
          switch (error.status) {
            case 404:
              errorMessage = 'Помилка 404: Ресурс не знайдено.';
              break;
            case 500:
              errorMessage = 'Помилка 500: Внутрішня помилка сервера.';
              break;
            default:
              
              errorMessage = `Помилка ${error.status}: ${error.message}`;
              break;
          }
        }
      } else if (error && typeof error === 'object' && 'message' in error) {
        
        errorMessage = `Помилка: ${error.message}`;
      }
      
      alert(errorMessage);
      
      
      return throwError(() => error);
    })
  );
};