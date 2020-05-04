import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
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
  Vets()
  {
    this.token= this.tokenn.get() ;
    return this.http.get('http://backend2.test:8800/api/Vets?token='+this.token)//.pipe(map(response =>JSON.stringify(response)));
  }
  vetsAdd(data)
  {
    this.token =this.tokenn.get() ;
    return this.http.post('http://backend2.test:8800/api/attache_vet?token='+this.token,data ) ;
  }
  PetOwners()
  {
    this.token=this.tokenn.get();
    return this.http.get('http://backend2.test:8800/api/PetOwners?token='+this.token)
  }
  ChangeStatsu($id)
  {
    this.token=this.tokenn.get();
    return this.http.get('http://backend2.test:8800/api/PetOwnerChangeStatus/'+$id+'?token='+this.token)
  }
  PetOwner($id)
  {
    this.token=this.tokenn.get();
    return this.http.get('http://backend2.test:8800/api/PetOwner/'+$id+'?token='+this.token)
  }
  Update(data)
  {

    this.token =this.tokenn.get() ;
    return this.http.post('http://backend2.test:8800/api/PetOwnerUpdate?token='+this.token,data ) ;
  }
}
