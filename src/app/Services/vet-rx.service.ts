import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class VetRxService {

  constructor(private http: HttpClient, private tokenn : TokenService) {

   } public token =this.tokenn.get() ;
  VetProfil ($id)
  {
    this.token=this.tokenn.get();
    return this.http.get('http://backend2.test:8800/api/Vet/'+$id+'?token='+this.token)
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
  AddVet(data){

    this.token =this.tokenn.get() ;
    return this.http.post('http://backend2.test:8800/api/addVet?token='+this.token,data) ;
  }
  UpdateUser(data)
  {
    this.token =this.tokenn.get() ;
    return this.http.post('http://backend2.test:8800/api/UserUpdate?token='+this.token,data ) ;
  }
  UpdateVet(data)
  {
    this.token =this.tokenn.get() ;
    return this.http.post('http://backend2.test:8800/api/VetUpdate?token='+this.token,data ) ;
  }
  PetOnwerAdd(data)
  {
    this.token =this.tokenn.get() ;
    return this.http.post('http://backend2.test:8800/api/attaPetowner?token='+this.token,data ) ;
  }
  CarfulTeam($id)
  {

      this.token =this.tokenn.get() ;
    return this.http.get('http://backend2.test:8800/api/CarefulTeam/'+$id+'?token='+this.token ) ;
  }
}
