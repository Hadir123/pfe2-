import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(private auth :AuthService, private route:Router, private Token :TokenService ,private http: HttpClient, private jarwis :JarwisService) { }
  token=this.Token.get();

  ngOnInit(): void {
  }
  logout(event :MouseEvent)
  {
    this.http.get('http://backend2.test:8800/api/logout?token='+this.token).subscribe(
          data=>console.log(data),
           err=>console.log(err));
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.jarwis.setStatus(false);
    this.Token.remove() ;
    this.route.navigateByUrl('/login');
  }
}
