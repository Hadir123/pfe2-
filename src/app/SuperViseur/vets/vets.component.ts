import { Component, OnInit } from '@angular/core';
import { VetRxService } from 'src/app/Services/vet-rx.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'src/app/Services/token.service';
@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {
  public user=[];
 // public test=[];
 public show:boolean=true;
 visible:boolean =false;
  public Token ;
public link ;
 public j=0;

 public back =null ;
  public users =null;
  public search =null ;
  public hadir=false ;
  public numberPage =[] ;
  public curentPage =1;
  public statue='active' ;
  order: string = 'name'; config: any;
  constructor(private vets: VetRxService ,private router: ActivatedRoute,private route:Router , private http:HttpClient,private token :TokenService) {

  }



  ngOnInit(): void {
    if (this.statue==='active')
    {
      this.hadir==true ;
    }

this.vets.Vets().subscribe(data=>
  {
    this.users=data

    console.log(data)
this.link=this.users.links.next;
this.numberPage.length=this.users.meta.last_page ;
console.log(this.numberPage);

this.curentPage=this.users.meta.current_page;
console.log(this.curentPage)
   this.users=this.users.data ;

    console.log(this.users)
    for( var i=0; i<this.users.length;i++)
{this.users[i].name= this.users[i].name[0].toUpperCase() + this.users[i].name.substr(1).toLowerCase();
this.user[i]=this.users[i];
}

console.log(this.user)}
  ,
err=> console.log(err));

}

  hi($id)
{
this.vets.ChangeStatsu($id).subscribe(data=>console.log(data),
  err=>console.log(err));
}
edit($id)
{console.log($id);
  this.route.navigateByUrl('/VetProfil/'+$id);
}
find ()
{
}
pageChanged(){

  console.log('hhhh')
this.Token=this.token.get();

console.log(this.link);
this.users=[];
this.user=[];

this.http.get(this.link+'&token='+this.Token).subscribe(data=>{console.log(data)

  this.users=data
  //console.log(data)
this.link=this.users.links.next;
this.curentPage=this.users.meta.current_page;
this.back=this.users.links.prev;
//console.log(this.back);
 this.users=this.users.data ;
  //console.log(this.users)
  for( var i=0; i<this.users.length;i++)
{this.users[i].name= this.users[i].name[0].toUpperCase() + this.users[i].name.substr(1).toLowerCase();
this.user[i]=this.users[i];
}
if(this.link===null)
{
this.show=false
}
//console.log(this.user)
this.visible=true ;

},
err=> console.log(err));




}
pageChanged2()
{

  this.Token=this.token.get();
  //console.log(this.link);
  this.users=[];
  this.user=[];

  this.http.get(this.back+'&token='+this.Token).subscribe(data=>{console.log(data)
    this.users=data
    console.log(data)
  this.link=this.users.links.next;
  this.back=this.users.links.prev;
  this.curentPage=this.users.meta.current_page;
  console.log(this.back)
   this.users=this.users.data ;
    console.log(this.users)
    for( var i=0; i<this.users.length;i++)
  {this.users[i].name= this.users[i].name[0].toUpperCase() + this.users[i].name.substr(1).toLowerCase();
  this.user[i]=this.users[i];
  }
  console.log(this.user)
  this.visible=true ;
  if(this.back===null)
{
  this.visible=false ;
  this.show=true ;
}}
  ,
  err=> console.log(err));
}




}
