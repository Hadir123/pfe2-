import { Component, OnInit } from '@angular/core';
import { PetOwnerService } from 'src/app/Services/pet-owner.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import{TitleCasePipe}from'@angular/common';
import { TokenService } from 'src/app/Services/token.service';
import { HttpClient } from '@angular/common/http';
//import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-pet-owners',
  templateUrl: './pet-owners.component.html',
  styleUrls: ['./pet-owners.component.css']
})
export class PetOwnersComponent implements OnInit {


  constructor(private petowner:PetOwnerService , private route:Router,private token:TokenService, private http:HttpClient) { this.config = {
    itemsPerPage: 7,
    currentPage: 1,
    totalItems: this.user.length
  };}
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

  ngOnInit(): void {
    if (this.statue==='active')
    {
      this.hadir==true ;

this.petowner.PetOwners().subscribe(data=>
  {
    this.users=data

    console.log(data)
this.link=this.users.links.next;
if(this.link===null)
{

  this.show=null ;
}
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

console.log(this.user)}

/*find ()
{this.petowner.PetOwners().subscribe(data=>
  {
    this.users=data
    console.log(this.users)
    for( var i=0; i<this.users.length;i++)
{
this.user[i]=this.users[i][0];
}

console.log(this.user)}
  ,
  err=> console.log(err));

console.log(this.search);
for (var i=0; i<this.user.length; i++)
{
  if(this.user[i].name===this.search.name)
  {
    this.test[this.j]=this.user[i] ;

    this.j++;
  }
}
this.user=this.test;
this.j=0;
console.log(this.test);
}*/
hi($id)
{
this.petowner.ChangeStatsu($id).subscribe(data=>console.log,
  err=>console.log(err));
}
edit($id)
{
 this.route.navigateByUrl('/PetOwnerProfil/'+$id);
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
