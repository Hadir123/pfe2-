
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
 @ViewChild('searchHi') searchHi: ElementRef;

  constructor(private auth:AuthService , private jarwis:JarwisService) { }
loggedIn:boolean=false ;
client:boolean ;

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


}
