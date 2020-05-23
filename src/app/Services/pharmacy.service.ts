import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
public adresse ;
public Token ;
  constructor( private Http :HttpClient , private token :TokenService) { }

  AddPharmacy(data){

    this.Token =this.token.get() ;
    return this.Http.post('http://backend2.test:8800/api/AddPharmacy?token='+this.Token,data) ;
  }
}

