import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class RxServiceService {

  constructor( private http : HttpClient , private token:TokenService) { }
Token=this.token.get() ;


 Drugs()
 {this.Token=this.token.get() ;
  return this.http.get('http://backend2.test:8800/api/Drugs?token='+this.Token);

 }
 ElementPrespection(id)
 {this.Token=this.token.get() ;
  return this.http.get('http://backend2.test:8800/api/Drug/'+id+'?token='+this.Token);

 }
}
