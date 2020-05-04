import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loggenInd = new BehaviorSubject<boolean>(this.token.loggedIn())
authStatus=this.loggenInd.asObservable() ;

  constructor(private token:TokenService) { }
  changeAuthStatus(value : boolean)
  {
    this.loggenInd.next(value);
  }


}
