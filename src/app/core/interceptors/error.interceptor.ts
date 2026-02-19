import { HttpInterceptorFn } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    tap((event: any) => {
      if (event.body?.partialSuccess) {
        console.warn('Partial success detected');
      }
    }),
    catchError(error => {
      console.error('Global Error:', error);
      return throwError(() => error);
    })
  );
};
