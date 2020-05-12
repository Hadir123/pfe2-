import { Component, OnInit } from '@angular/core';
import { VetRxService } from 'src/app/Services/vet-rx.service';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {
  public user=[];
  public test=[];

 public j=0;
  public users =null;
  public search =null ;
  public hadir=false ;
  public statue='active' ;
  order: string = 'name'; config: any;
  constructor(private vets: VetRxService ,private route:Router) { this.config = {
    itemsPerPage: 7,
    currentPage: 1,
    totalItems: this.user.length
  } }

  ngOnInit(): void {
    if (this.statue==='active')
    {
      this.hadir==true ;

this.vets.Vets().subscribe(data=>
  {
    this.users=data
    console.log(this.users)
    for( var i=0; i<this.users.length;i++)
{this.users[i].name= this.users[i].name[0].toUpperCase() + this.users[i].name.substr(1).toLowerCase();
this.user[i]=this.users[i];
}

console.log(this.user)}
  ,
  err=> console.log(err));}
  }
  hi($id)
{
this.vets.ChangeStatsu($id).subscribe(data=>console.log(data),
  err=>console.log(err));
}
edit($id)
{
this.route.navigateByUrl('/VetProfil/'+$id);
}
find ()
{/*this.petowner.PetOwners().subscribe(data=>
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
console.log(this.test);*/
}
pageChanged(event){
  this.config.currentPage = event;
}
}
