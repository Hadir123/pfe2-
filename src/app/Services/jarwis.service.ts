import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JarwisService {
 public connected:boolean=false ;
 public client:boolean = false ;
public jsonURL='http://backend.test:8800/api';
  constructor(private http: HttpClient) {
  }

  signup(data)
  {
    return this.http.post('http://backend2.test:8800/api/register',data) ;
  }
  onSubmit(data)
  {
  return this.http.post('http://backend2.test:8800/api/login',data ) ;
  }
  sendPasswordRestLink(data)
  {
    return this.http.post('http://backend2.test:8800/api/SendPasswordRasetLink',data ) ;
  }
  changePassword(data)
  {
    return this.http.post('http://backend2.test:8800/api/restPassword',data ) ;
  }
  getStatus()
  {
    return this.connected ;
  }
  setStatus(state:boolean)
  {
    this.connected=state;
  }
  setCLient(s:boolean)
  {
    this.client=true ;

  }
 getCLient()
 {return this.client;}
 NewPassword(data)
 {
  return this.http.post('http://backend2.test:8800/api/NewPassword',data ) ;
 }
}
