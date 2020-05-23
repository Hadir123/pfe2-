import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './Services/token.service';
import { Compiler } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Login3';
  public loggedIn = false ;
  visible: boolean;

  constructor(private auth :AuthService, private route:Router, private Token :TokenService ,private _compiler: Compiler) { this.loggedIn =false;
}

  ngOnInit(): void {
    this._compiler.clearCache();


  this.auth.authStatus.subscribe(value=>{
    this.loggedIn=value
  this.visible=true;})
  if(this.Token.get()===null)
{
  this.route.navigateByUrl('/login');

}


  }
  logout(event :MouseEvent)
  {
    event.preventDefault();
    this.visible = false;
    this.auth.changeAuthStatus(false);
    this.Token.remove() ;

this.route.navigateByUrl('/login');
  }


}
