import { Component, OnInit } from '@angular/core';
import { VetRxService } from 'src/app/Services/vet-rx.service';
import { Router } from '@angular/router';
import { PharmacyService } from 'src/app/Services/pharmacy.service';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css']
})
export class PharmaciesComponent implements OnInit {
  public pharmacies =[];
  public test=[];
  public show:boolean=true;
  visible:boolean =false;
   public Token ;
 public link ;
  public j=0;

  public back =null ;

  public users =null;
  public search =null ;
  public admin;
  public hadir:boolean=false ;
  public statue='active' ;
  public numberPage =[] ;
  public curentPage =1;
  order: string = 'pharmacyName'; config: any;
  constructor(private pharmacy: PharmacyService ,private route:Router , private vets:VetRxService ,private http:HttpClient,private token:TokenService) { this.config = {
    itemsPerPage: 7,
    currentPage: 1,
    totalItems: this.pharmacies.length
  } }

  ngOnInit(): void {
this.j=0 ;
if (this.statue==='active')
    {
      this.hadir==true ;
    }
//this.test.length=0;
this.pharmacy.pharmacies().subscribe(data=>
  {
    this.users=data
    console.log(data)
    this.link=this.users.links.next;
    this.numberPage.length=this.users.meta.last_page ;
    console.log(this.numberPage);

    this.curentPage=this.users.meta.current_page;
    console.log(this.curentPage)
    this.users=this.users.data ;
    ///console.log(this.users)
    for( var i=0; i<this.users.length;i++)
{var h ;
 this.users[i].pharmacyName= this.users[i].pharmacyName[0].toUpperCase() + this.users[i].pharmacyName.substr(1).toLowerCase();
this.pharmacies[i]=this.users[i];

this.pharmacy.pharmacistAdmin(this.pharmacies[i].id).subscribe(data=>{
  this.admin=data ;
  this.test[this.test.length]=this.admin;
  this.test.length++;
});}}
  ,
  err=> console.log(err));
  console.log("*************************");
 // console.log(this.test)
  for( var i=0; i<this.users.length;i++)
{  console.log("*************************")
  /*this.pharmacy.pharmacistAdmin(this.pharmacies[i].id).subscribe(data=>{
  this.admin=data ;
console.log(this.admin)
  this.test[this.j]=this.admin


if (this.statue==='active')
{
  this.hadir==true ;}},
  err=>console.log(err)
);
console.log(this.test[this.j]);
 ;this.j++;*/
}


console.log(this.test) ;
 //console.log(this.test);
 // console.log(this.pharmacies)
  }

  hi($id)
{
this.vets.ChangeStatsu($id).subscribe(data=>console.log(data),
  err=>console.log(err));
}
edit($id)
{
this.route.navigateByUrl('/HomePageVet/pharmacies/pharmacy/'+$id);
}
pageChanged(){

  console.log('hhhh')
this.Token=this.token.get();

console.log(this.link);
this.users=[];
this.pharmacies=[];

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
{this.users[i].pharmacyName= this.users[i].pharmacyName[0].toUpperCase() + this.users[i].pharmacyName.substr(1).toLowerCase();
this.pharmacies[i]=this.users[i];
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
  this.pharmacies=[];

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
  {this.users[i].pharmacyName= this.users[i].pharmacyName[0].toUpperCase() + this.users[i].pharmacyName.substr(1).toLowerCase();
  this.pharmacies[i]=this.users[i];
  }
  console.log(this.pharmacies)
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
