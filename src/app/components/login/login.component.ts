import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JarwisService } from 'src/app/Services/jarwis.service';
import{TokenService} from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

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
public error= null ;
  constructor(private Jarwis:JarwisService,
    private tokeen:TokenService, private route :Router,private auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit()
{ this.Jarwis.onSubmit(this.form).subscribe(data=>{
  /*let result:any=data;
  console.log(result);
  if(result.access_token)
  {
    localStorage.setItem("token",result.access_token);
   // alert("sa77it yé rajjél ")*/

 this.handleResponse(data);
},err=>{
  //console.log("erroor",error.error.error);
this.handleErro(err);
  console.log(err);
 /* if(err.status==401)
  {
   alert("ya3tek kassra ");
  }*/
})}

handleErro(error)
{this.error=error.error.error ;

}
handleResponse(data)
{
this.tokeen.handle(data.access_token);
this.auth.changeAuthStatus(true);
this.route.navigateByUrl('/HomePage');
}


}
