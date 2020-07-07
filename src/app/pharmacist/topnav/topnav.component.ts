import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/Services/jarwis.service';
import Pusher from 'pusher-js';
let echo = new Pusher(

'e92d996a81c7f660c657',


);
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  public loggedIn :boolean;
  public noti=[];
  public test ;
  public countNotif=0 ;
  order: string = 'RxOrderDate'
    constructor(private auth :AuthService, private route:Router, private Token :TokenService ,private http: HttpClient, private jarwis :JarwisService)  { }
  token =this.Token.get();
  ngOnInit(): void {
    this.auth.authStatus.subscribe(value=>this.loggedIn=value);
   ///   if(this.token,)
   this.noti=[];

   this.notif();
   Pusher.logToConsole = true;

       var pusher = new Pusher('e92d996a81c7f660c657', {
         cluster: 'mt1'
       });

       var channel = pusher.subscribe('order');
       channel.bind('my-event', function(data) {
         alert(JSON.stringify(data));
   //this.countNotif=this.countNotif+1;
       });
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

     notif()
     {  this.noti=[];

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
           /*if(this.noti[i].statusName==='created')
           {this.noti[i].statusName='You Have a new Order'

           }*/
           switch (this.noti[i].statusName)
           {
           case 'created': {
             this.noti[i].statusName='You Have a new Order # '+this.noti[i].id+' in the '+this.noti[i].RxOrderDate;
              break;
           }
           case 'In Process': {
             this.noti[i].statusName='Order#'+this.noti[i].id+' was changed to '+this.noti[i].statusName
             //this.display=true;
              break;
           }
           case'pending assignment':{
             this.noti[i].statusName='Order# '+this.noti[i].id+' was changed to '+this.noti[i].statusName
             break;
           }
           case'Shipped':{
             this.noti[i].statusName='Order# '+this.noti[i].id+' was changed to '+this.noti[i].statusName
             break;
           }
           case'Incomplete':{
             this.noti[i].statusName='Order# '+this.noti[i].id+' was changed to '+this.noti[i].statusName
             break;
           }
           case'Canceled':{
             this.noti[i].statusName='Order# '+this.noti[i].id+' was changed to '+this.noti[i].statusName;
             break;
           }
           case'Pick Up':{
             this.noti[i].statusName='Order# '+this.noti[i].id+' was changed to '+this.noti[i].statusName
             break;
           }
           case'ready':{
             this.noti[i].statusName='Order# '+this.noti[i].id+' was changed to '+this.noti[i].statusName
             break;
           }

           case'Awaiting payment in pharmacy':{
             this.noti[i].statusName='Order# '+this.noti[i].id+' was changed to '+this.noti[i].statusName
             break;
           }
         }
           console.log(this.noti[i])}
         }
         ,
         err=> console.log(err));
       }
       show()
       {this.token =this.Token.get();

        this.http.get('http://backend2.test:8800/api/Profil?token='+this.token).subscribe(data=>console.log(data),
         err=>console.log(err)) ;
       }
}
