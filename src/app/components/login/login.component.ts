import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JarwisService } from 'src/app/Services/jarwis.service';
import{TokenService} from 'src/app/Services/token.service';

import { AuthService } from 'src/app/Services/auth.service';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public form={
  email:null,
  password:null
};
res =null;
public loggedIn :boolean;
public error= null ;
  constructor(private Jarwis:JarwisService,
    private tokeen:TokenService, private route :Router,private auth:AuthService) {
 // this.auth.authStatus.subscribe(value=>this.loggedIn);
    localStorage.clear();
     }

  ngOnInit(): void {
    this.loggedIn =false
    localStorage.clear();

  }

  onSubmit()
{ this.Jarwis.onSubmit(this.form).subscribe(data=>{
  let result:any=data;
  console.log(result);
this.res=result.res
  if(result.access_token)
  {
    localStorage.setItem("token",result.access_token);
   // alert("sa77it yé rajjél ")*/

 this.handleResponse(data);
}},
err=>{
console.log("erroor",err.error.error);
this.handleErro(err);
  console.log(err);
  if(err.status==401)
  {
  // alert("ya3tek kassra ");
  }
});
}

handleErro(error)
{this.error=error.error.error ;

}
handleResponse(data)
{
//this.tokeen.handle(data.access_token);
this.auth.changeAuthStatus(true);
if(this.res=='1')
{
   localStorage.setItem('logedIn','true');
   window.location.replace('/HomePageVet');

}
else if (this.res=='2')
 { this.Jarwis.setCLient(true);

  localStorage.setItem('logedIn','true');
  window.location.replace('/HomePageClient');
}
else
{if (this.res=='3')
  //this.Jarwis.setCLient(true);

  localStorage.setItem('logedIn','true');
  window.location.replace('/HomePagePharmacist')
}
//this.route.navigateByUrl('/HomePage');
}


}
