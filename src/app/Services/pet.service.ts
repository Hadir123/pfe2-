import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PetService {
public token=null ;
  constructor(private http: HttpClient, private tokenn : TokenService) { }
  Pets(id)
  {this.token=this.tokenn.get();
    return this.http.get('http://backend2.test:8800/api/pet/'+id+'?token='+this.token);
  }
}
