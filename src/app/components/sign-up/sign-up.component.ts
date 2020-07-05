import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{TokenService} from 'src/app/Services/token.service';
import { Router } from '@angular/router';

// import custom validator to validate that password and confirm password fields match



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public form={
    email:null,
    name:null,
    password:null,
    password_confirmation:null
  };
  public error=null ;
  constructor(private Jarwis :JarwisService, private http : HttpClient , private tokeen:TokenService,private route :Router) { }
ngOnInit()
{

}

onSubmit()
{
  this.Jarwis.signup(this.form).subscribe(
  data=> this.handleResponse(data),
   error=>this.handleErro(error)
   );
}
handleErro(error)
{
this.error=error.error.errors;
}
handleResponse(data)
{
this.tokeen.handle(data.access_token);
this.route.navigateByUrl('/profil');
}

}
