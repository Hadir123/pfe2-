import { Component, OnInit } from '@angular/core';
import { PetOwnerService } from 'src/app/Services/pet-owner.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-pet-owners',
  templateUrl: './pet-owners.component.html',
  styleUrls: ['./pet-owners.component.css']
})
export class PetOwnersComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Delhi', 'Mumbai', 'Banglore'];
  constructor(private petowner:PetOwnerService) { }
 public user=[];
 public test=[];

public j=0;
 public users =null;
 public search =null ;
 public hadir=false ;
 public statue='active' ;

  ngOnInit(): void {
    if (this.statue==='active')
    {
      this.hadir==true ;

this.petowner.PetOwners().subscribe(data=>
  {
    this.users=data
    console.log(this.users)
    for( var i=0; i<this.users.length;i++)
{
this.user[i]=this.users[i][0];
}

console.log(this.user)}
  ,
  err=> console.log(err));}
  }
find ()
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
}
hi($id)
{/*console.log(this.statue);
  for (var i=0; i<this.user.length; i++)
if(this.user[i].status==='active')
{ console.log(this.user[i].id)
  this.statue='desactive'
}
else
{
  this.statue='active'
}*/
this.petowner.ChangeStatsu($id).subscribe(data=>console.log,
  err=>console.log(err));
}
}
