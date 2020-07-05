import { Component, OnInit } from '@angular/core';
import { PetOwnerService } from 'src/app/Services/pet-owner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-profil-pet-owner',
  templateUrl: './profil-pet-owner.component.html',
  styleUrls: ['./profil-pet-owner.component.css']
})
export class ProfilPetOwnerComponent implements OnInit {

  constructor(private petowner:PetOwnerService ,private router:Router,  private route: ActivatedRoute ,private notifier:NotifierService) { }
public edite:boolean;
public test=null;
public user=null;
public $id=null ;
public adresse=null;
  ngOnInit(): void {
   this.$id =this.route.snapshot.params['id'];
console.log(this.$id)
 this.petowner.PetOwner(this.$id).subscribe(data=>{
   this.test=data;
   this.user=this.test.user ;
   console.log(this.user);
this.adresse=this.test.adresse;
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
this.petowner.UpdateAddress(this.adresse).subscribe(data=>{console.log(data);
  this.test=data
this.user.adresse_id=this.test.adresse_id ;

  this.petowner.Update(this.user).subscribe(data=>{console.log(data)
    this.test=data ;
    this.user=this.test.user ;
    console.log(this.user)
    this.notifier.notify("success", "  Done , User successfully modified. ");
    },
    err=>{console.log(err)
      this.petowner.PetOwner(this.$id).subscribe(data=>{
        this.test=data;
        this.user=this.test.user ;
        console.log(this.user);
     this.adresse=this.test.adresse;
     console.log(this.adresse);});
     this.notifier.show({
      type: "error",
      message: "Whoops, something went wrong. Probably.",

    });

    });

},err=>console.log(err));

console.log(this.adresse);
this.edite=false ;
}
}

