import { Component, OnInit, Compiler } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title = 'Login3';
  public loggedIn = false ;
  visible: boolean;
  show = false ;

  constructor(private auth :AuthService, private route:Router, private Token :TokenService ,private _compiler: Compiler) { this.loggedIn =false;

   // this._compiler.clearCache();
    //this.Token.remove() ;

  this.loggedIn = true ;  }

  ngOnInit(): void {

console.log('hhhhhhhhhhhhhhhhhh')

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
