import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './Services/token.service';
import { Compiler } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { JarwisService } from './Services/jarwis.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Login3';
  public loggedIn: boolean = false;
  visible: boolean = false;
  token: any;
  show = false;
  client :boolean;
  //private login:LoginComponent

  constructor(private auth: AuthService, private route: Router, private Token: TokenService, private _compiler: Compiler, public jarwis: JarwisService) {
   // this.loggedIn = false;
   // this._compiler.clearCache();
    //this.Token.remove() ;
  //  this.auth.changeAuthStatus(true)
   /* if (localStorage.getItem('logedIn')) {
      this.loggedIn = Boolean(localStorage.getItem('logedIn'));
    }
    this.client=this.jarwis.getCLient() ;
    this.client=this.jarwis.getCLient() ;
    console.log(this.client)*/
  }

  ngOnInit(): void {
    //this.loggedIn=this.login.loggedIn;
    //if(this.loggedIn)
  //  this.token = localStorage.getItem("token");
    console.log("Token ==>", this.token);
    console.log("Token ==>", this.loggedIn);
    /*if (localStorage.getItem('logedIn')) {
      this.loggedIn = Boolean(localStorage.getItem('logedIn'));
    }*/
    //  this.auth.authStatus.subscribe(value=>this.loggedIn=value);
   // this.client=false;

  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.visible = false;
    this.auth.changeAuthStatus(false);
    this.Token.remove();

    this.route.navigateByUrl('/login');

  }
  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');


    if (!token) {
      return false;
    } else {
      return true; // !this.jwtHelperService.isTokenExpired(token);
    }
  };
  changeStatus() {
    this.show = !this.show;

  }

}
