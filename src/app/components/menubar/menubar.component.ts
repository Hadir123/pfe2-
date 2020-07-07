
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
 @ViewChild('searchHi') searchHi: ElementRef;

  constructor(private auth :AuthService, private route:Router, private Token :TokenService ,private http: HttpClient, private jarwis :JarwisService) { }
loggedIn:boolean=false ;
client:boolean ;
token=this.Token.get() ;
  ngOnInit(): void {
    this.auth.authStatus.subscribe(value=>this.loggedIn=value);

    if (localStorage.getItem('logedIn')) {
      this.loggedIn = Boolean(localStorage.getItem('logedIn'));
    }
    this.jarwis.setCLient(false);
    this.client=this.jarwis.getCLient() ;
  }
  test=false;
   cred=false;
   testing()
   {
     this.test=true;
   }
   testing2()
   {
     this.cred=true;
   }
   init()
   {
     this.test=false;
     this.cred=false;
   }
   logout(event :MouseEvent)
   { this.http.get('http://backend2.test:8800/api/logout?token='+this.token).subscribe(
           data=>console.log(data),
            err=>console.log(err));
     event.preventDefault();
     this.auth.changeAuthStatus(false);
     this.jarwis.setStatus(false);
     this.Token.remove() ;
     this.route.navigateByUrl('/login');
   }

}
