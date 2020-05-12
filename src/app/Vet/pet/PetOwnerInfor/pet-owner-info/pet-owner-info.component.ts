import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetOwnerService } from 'src/app/Services/pet-owner.service';

@Component({
  selector: 'app-pet-owner-info',
  templateUrl: './pet-owner-info.component.html',
  styleUrls: ['./pet-owner-info.component.css']
})
export class PetOwnerInfoComponent implements OnInit {
public $id= null ;
  constructor(private route: ActivatedRoute , private petowner :PetOwnerService) { }
public user:{
  name :null,
last_name:null,


email:null;
} ;
public  test =null ;
  ngOnInit(): void {
    this.$id =this.route.snapshot.params['id'];
    console.log(this.$id)
this.petowner.PetOwner(this.$id).subscribe(data=>
  {this.test=data ;
    this.user=this.test.user;
console.log(this.user);
  },);
  }


}
