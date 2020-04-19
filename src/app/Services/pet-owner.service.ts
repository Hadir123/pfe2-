import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetOwnerService {


  constructor(private http: HttpClient, private tokenn : TokenService) {

  }
public token;
  onSubmit(data)
  { this.token =this.tokenn.get() ;
  return this.http.post('http://backend2.test:8800/api/addPetOwner?token='+this.token,data) ;
  }
}
