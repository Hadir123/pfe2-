import { Component, OnInit } from '@angular/core';
import { PetOwnerService } from 'src/app/Services/pet-owner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil-pet-owner',
  templateUrl: './profil-pet-owner.component.html',
  styleUrls: ['./profil-pet-owner.component.css']
})
export class ProfilPetOwnerComponent implements OnInit {

  constructor(private petowner:PetOwnerService ,private router:Router,  private route: ActivatedRoute) { }
public edite:boolean;
public test=null;
public user=null;
public form={
  name:null ,
  last_name:null,
  email:null ,
};
public $id=null ;
public adresse=null;
  ngOnInit(): void {
   this.$id =this.route.snapshot.params['id'];
console.log(this.$id)
 this.petowner.PetOwner(this.$id).subscribe(data=>{
   this.test=data;
   this.user=this.test.user ;
   console.log(this.user);
this.adresse=this.test.adresse[0];
//console.log(this.user.user);
console.log(this.adresse);
   this.edite=false
 },
   err=>console.log(err));

  }
edit()
{
  this.edite=true;
}
save(){
console.log(this.user);
this.petowner.Update(this.user).subscribe(data=>console.log(data),
err=>console.log(err));
console.log(this.adresse);
this.edite=false ;
}
}

