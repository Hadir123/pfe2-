import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class VetRxService {

  constructor(private http: HttpClient, private tokenn : TokenService) {

   } public token =this.tokenn.get() ;
  Users()
  {
    return this.http.get('http://backend2.test:8800/api/Users?token='+this.token);
  }
  Pets(id)
  {
    return this.http.get('http://backend2.test:8800/api/pet/'+id+'?token='+this.token);
  }
  Vets()
  {
    this.token= this.tokenn.get() ;
    return this.http.get('http://backend2.test:8800/api/Vets?token='+this.token)//.pipe(map(response =>JSON.stringify(response)));
  }
  ChangeStatsu($id)
  {
    this.token=this.tokenn.get();
    return this.http.get('http://backend2.test:8800/api/VetChangeStatus/'+$id+'?token='+this.token)
  }
}
