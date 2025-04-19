import { Injectable,Provider } from '@angular/core'; 
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'; 
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { AuthenticationService } from '../services/authentication.service'; 

@Injectable()

export class jwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    req: HttpRequest<any>, 
    next:HttpHandler
  ): Observable<HttpEvent<any>> {
    var isAuthAPI: boolean;
    if (req.url.startsWith('login') || req.url.startsWith('register'))
    {
      isAuthAPI = true;
    } else {
      isAuthAPI = false;
    }

    if (this.authenticationService.isLoggedIn() && !isAuthAPI) 
    {
      let token = this.authenticationService.getToken();
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}

export const authInterceptProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: jwtInterceptor,
  multi: true,
};
