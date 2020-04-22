import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './Services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Login3';
  public loggedIn = false ;

  constructor(private auth :AuthService, private route:Router, private Token :TokenService ) { }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(value=>this.loggedIn=value);
  }
  logout(event :MouseEvent)
  {
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.Token.remove() ;

this.route.navigateByUrl('/login');
  }
  nav()
  {
    if(this.Token.get()===null)
    return false ;
    else
    return true ;
  }

}
