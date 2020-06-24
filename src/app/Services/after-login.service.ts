import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {
  authenticationService: any;

  constructor(private Token:TokenService, private route:Router , private authService:AuthService) {

  }
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {

    if (this.Token.loggedIn() && Boolean(localStorage.getItem("logedIn"))){
     return this.Token.loggedIn() ;
    }else{
      window.location.replace('/login')
    }
  }
}

