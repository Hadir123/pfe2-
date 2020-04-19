import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JarwisService {
public jsonURL='http://backend.test:8800/api';
  constructor(private http: HttpClient) {
  }

  signup(data)
  {
    return this.http.post('http://backend2.test:8800/api/register',data) ;


  }
  onSubmit(data)
  {
  return this.http.post('http://backend2.test:8800/api/loginVet',data ) ;
  }
  sendPasswordRestLink(data)
  {
    return this.http.post('http://backend2.test:8800/api/SendPasswordRasetLink',data ) ;
  }
  changePassword(data)
  {
    return this.http.post('http://backend2.test:8800/api/restPassword',data ) ;
  }
}
