import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
public adresse ;
public Token ;
  constructor( private Http :HttpClient , private token :TokenService) { }
pharmacies ()
{

  this.Token =this.token.get() ;
  return this.Http.get('http://backend2.test:8800/api/pharmacies?token='+this.Token) ;
}
  AddPharmacy(data){

    this.Token =this.token.get() ;
    return this.Http.post('http://backend2.test:8800/api/AddPharmacy?token='+this.Token,data) ;
  }
  addPharmacistAdmin(data)
  {   this.Token =this.token.get() ;
    return this.Http.post('http://backend2.test:8800/api/AddPharmacien?token='+this.Token,data) ;

  }

  pharmacistAdmin($id)
  {
    this.Token =this.token.get() ;
    return this.Http.get('http://backend2.test:8800/api/pharmacist/'+$id+'?token='+this.Token)
  }
  pharmacy($id)
  {
    this.Token=this.token.get() ;
    return this.Http.get('http://backend2.test:8800/api/pharmacy/'+$id+'?token='+this.Token)
  }
  UpdatePharmacy(data)
  {
    this.Token=this.token.get() ;
    return this.Http.post('http://backend2.test:8800/api/UpdatePharmacy?token='+this.Token ,data);
  }
UpdatePharmacistAdmin(data)
{

}
}

