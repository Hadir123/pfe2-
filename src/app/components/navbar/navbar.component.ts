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
public loggedIn :boolean;
public noti=[];
public test ;
public countNotif=0 ;
  constructor(private auth :AuthService, private route:Router, private Token :TokenService ,private http: HttpClient)  { }
token =this.Token.get();
  ngOnInit(): void {
  this.auth.authStatus.subscribe(value=>this.loggedIn=value);
//    if(this.token,)
this.notif();
  }

  logout(event :MouseEvent)
  {this.http.get('http://backend2.test:8800/api/logout?token='+this.token).subscribe(data=>console.log(data),
  err=>console.log(err));
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.Token.remove() ;

this.route.navigateByUrl('/login');
  }

  notif()
  {
    this.token=this.Token.get();
    this.http.get('http://backend2.test:8800/api/Notif'+'?token='+this.token).subscribe(
      data=>{console.log(data);
        this.test=data
this.countNotif=this.test.count;
console.log(this.countNotif);
console.log(this.test.notification)
this.noti=this.test.notification ;
//ar index: number = this.noti[0].data.indexOf('content');
//var indexe: number = this.noti[0].data.indexOf('date');
//console.log(this.noti[0].data);


      for(var i = 0 ; i<this.noti.length;i++)
       {this.noti[i]=this.noti[i].order;
        if(this.noti[i].statusName==='created')
        {this.noti[i].statusName='You Have a new Order'

        }
        console.log(this.noti[i])}
      /*  for( var i=0; i<this.test.length;i++)
    {
    this.noti[i]=this.test[i][0].data;
    }

  console.log(this.noti)*/}
      ,
      err=> console.log(err));
    }
    show()
    {this.token =this.Token.get();

     this.http.get('http://backend2.test:8800/api/Profil?token='+this.token).subscribe(data=>console.log(data),
      err=>console.log(err)) ;
    }


}
