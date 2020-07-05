import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { TokenService } from './token.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loggenInd = new BehaviorSubject<boolean>(this.token.loggedIn())
authStatus=this.loggenInd.asObservable() ;
  storageService: any;

  constructor(private token:TokenService) { }
  changeAuthStatus(value : boolean)
  {
    this.loggenInd.next(value);
  }

}
