import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { AuthService } from 'src/app/Services/auth.service';
import { SnotifyService } from 'ng-snotify';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  public form =
  {
    email :null ,
    password :null,
    password_confirmation : null,
    restToken:null
  }
  public error=null ;
  constructor( private route:ActivatedRoute, private jarwis:JarwisService,  private notify:SnotifyService,private notifier:NotifierService , private router :Router,private auth:AuthService) {
    route.queryParams.subscribe(params=>
      {
this.form.restToken=params['tokenn'];
      })
   }

  ngOnInit(): void {
  }
  onSubmit()
  {
this.jarwis.changePassword(this.form).subscribe(
  data=>this.handleResponse(data),
  error=>{
    this.handleErro(error);
    error=null;
  }

)
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
