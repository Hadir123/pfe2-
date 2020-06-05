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
  show = false ;

  constructor(private auth :AuthService, private route:Router, private Token :TokenService ,private _compiler: Compiler) { this.loggedIn =false;

    this._compiler.clearCache();
    //this.Token.remove() ;

  this.loggedIn = false ;  }

  ngOnInit(): void {



if(this.isAuthenticated)
{
  this.auth.authStatus.subscribe(value=>{
    this.loggedIn=value
  this.visible=true;})
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
  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');


     if (!token) {
      return false;
    } else {
      return true; // !this.jwtHelperService.isTokenExpired(token);
    }};
 changeStatus()
 {
   this.show=!this.show ;

 }

}
