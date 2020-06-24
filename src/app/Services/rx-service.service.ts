import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { order } from '../Vet/new-rx/order';
@Injectable({
  providedIn: 'root'
})
export class RxServiceService {

  constructor( private http : HttpClient , private token:TokenService) { }
Token=this.token.get() ;
idPetowner=null ;
Pet:any ;
order= new order() ;
pharmacyName:string =''
 Drugs()
 {this.Token=this.token.get() ;
  return this.http.get('http://backend2.test:8800/api/Drugs?token='+this.Token);

 }
 ElementPrespection(id)
 {this.Token=this.token.get() ;
  return this.http.get('http://backend2.test:8800/api/Drug/'+id+'?token='+this.Token);

 }
 OneElementPrespection($id)
 {
  this.Token=this.token.get() ;
  return this.http.get('http://backend2.test:8800/api/elem/'+$id+'?token='+this.Token);

 }
 test(data)
 {
   return this.http.post('http://backend2.test:8800/api/test',data);
 }
 setOrder(order:order)
 {
   this.order=order ;
 }
 getOrder()
 {return this.order}
setPetOwner(id)
{
  this.idPetowner=id ;
}
getPetOwner()
{
   return this.idPetowner ;
}
setPet(Pet:any )
{ this.Pet=Pet }
getPet()
{
  return this.Pet ;
}
getPharmacyName()
{
  return this.pharmacyName;
}
setPharmacyName(value:string)
{
  this.pharmacyName=value;
}
createOrder(data)
{
  this.Token=this.token.get();
  return this.http.post('http://backend2.test:8800/api/createOrder?token='+this.Token,data);

}
RxHistory()
{
  this.Token=this.token.get();
  return this.http.get('http://backend2.test:8800/api/allOrder?token='+this.Token);
}
}
