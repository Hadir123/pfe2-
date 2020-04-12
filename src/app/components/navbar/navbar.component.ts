import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public loggedIn :boolean
  constructor(private auth :AuthService, private route:Router, private Token :TokenService ,private http: HttpClient)  { }
token =this.Token.get();
  ngOnInit(): void {
    this.auth.authStatus.subscribe(value=>this.loggedIn=value);
  }
  logout(event :MouseEvent)
  {this.http.get('http://backend2.test:8800/api/logout?token='+this.token).subscribe(data=>console.log(data),
  err=>console.log(err));
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.Token.remove() ;

this.route.navigateByUrl('/login');
  }

}
