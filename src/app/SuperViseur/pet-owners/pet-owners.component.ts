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
//import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-pet-owners',
  templateUrl: './pet-owners.component.html',
  styleUrls: ['./pet-owners.component.css']
})
export class PetOwnersComponent implements OnInit {
  order: string = 'name'

  constructor(private petowner:PetOwnerService , private route:Router,) { this.config = {
    itemsPerPage: 7,
    currentPage: 1,
    totalItems: this.user.length
  };}
 public user=[];
 public test=[];
 config: any;

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
{this.users[i].name= this.users[i].name[0].toUpperCase() + this.users[i].name.substr(1).toLowerCase();
this.user[i]=this.users[i];

}

console.log(this.user)}
  ,
  err=> console.log(err));}
  }
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

pageChanged(event){
  this.config.currentPage = event;
}
/*titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substr(1).toLowerCase();}*/
}
