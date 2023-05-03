import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, finalize, Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptorService implements HttpInterceptor {

  constructor(public spinner:SpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.isLoading.next(true)

    return  next.handle(req).pipe(
      delay(800),
      finalize(
        () => {
          this.spinner.isLoading.next(false);
        }
      )
    );
    }
}
