import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { NotifierService } from 'angular-notifier';
import { ActivatedRoute, Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-password-pet-owner',
  templateUrl: './password-pet-owner.component.html',
  styleUrls: ['./password-pet-owner.component.css']
})
export class PasswordPetOwnerComponent implements OnInit {

  public form =
  {
    email :null ,
    password :null,
    password_confirmation : null,
  // restToken:null
  }
  public error=null ;
  constructor( private route:ActivatedRoute, private jarwis:JarwisService,  private notify:SnotifyService,private notifier:NotifierService , private router :Router,private auth:AuthService) {
   /* route.queryParams.subscribe(params=>
      {
this.form.restToken=params['tokenn'];
      })*/
      localStorage.clear() ;
   }

  ngOnInit(): void {
  }
  onSubmit()
  { console.log(this.form)
    if(this.form.password===this.form.password_confirmation)
{this.jarwis.NewPassword(this.form).subscribe(
  data=>this.handleResponse(data),
  error=>{
    this.handleErro(error);
    error=null;
  }


);
} else
this.error='Password Not confirmed'
  }
  handleResponse(data)
{
this.notifier.notify("success", "Done!,Now login with new Password");
this.router.navigateByUrl('/login')
}
handleErro(error)
{this.error=error.error.errors ;

}
}

