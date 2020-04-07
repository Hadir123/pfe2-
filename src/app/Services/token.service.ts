import { Injectable } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
private iss= {
  login :'http://backend2.test:8800/api/login',
  signup:'http://backend2.test:8800/api/register'
}
  constructor() { }
  handle(token)
  {
this.set(token);
//console.log(this.isValid());
  }
  set(token)
  {
    localStorage.setItem('token',token);
  }
  get()
  {return localStorage.getItem('token');}
  remove()
  {
    localStorage.removeItem('token');
  }
  isValid()
  { const token =this.get() ;
if(token){
  const paylode =this.payload(token);
  if(paylode)
  {// si le  token est vraiment valide n est pas fake
  // return  (paylode.iss==='http://backend2.test:8800/api/login'?true:false) ;
  return Object.values(this.iss).indexOf(paylode.iss)>-1 ?true:false ;
  }
  return false ;
}
  }
  //decoper le token la partie 2 est valide
payload(token)
{const payloadd=token.split('.')[1];
 return this.decode(payloadd);
}
decode(payloadd)
{//decode

return JSON.parse(atob(payloadd))
}
loggedIn()
{ return this.isValid();}
}
