import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { VetRxService } from 'src/app/Services/vet-rx.service';
import { NgSelectConfig } from '@ng-select/ng-select';


import { from, Observable } from 'rxjs';
import { PetOwnerService } from 'src/app/Services/pet-owner.service';
import { PetService } from 'src/app/Services/pet.service';

@Component({
  selector: 'app-new-rx',
  templateUrl: './new-rx.component.html',
  styleUrls: ['./new-rx.component.css']
})
export class NewRXComponent implements OnInit {
public user;

public pet;
  constructor(private router:Router , private Vet:VetRxService ,private config: NgSelectConfig, private petowenr :PetOwnerService ,private pets:PetService) {
  this.config.notFoundText = 'Not found';
    this.config.appendTo = 'body';
    this.config.bindValue = this.form.PetOwner;
  }


public formvalide=false;
public error;
form=
{

     PetOwner:null,

      Pet:this.pet,
      date:null,

};

  ngOnInit(): void {
   this.user=this.petowenr.PetOwners().subscribe(data=>this.user=data) ;
this.pet=null ;

  }

Petowner()
 {
  if (this.form.PetOwner===null)
  {   this.Invalide();
     console.log("hye ikteb haja ")


  }
   else
  {     this.valide();
      console.log("sahyts");
      console.log(this.form.PetOwner.email)
      console.log(this.form.PetOwner.id)
      console.log(this.formvalide)
      this.pet=null;

      this.form.Pet=null ;
      this.Pets(this.form.PetOwner.id);
      this.form.Pet=this.pet
          if (this.form.date===null)
              {   var now = new Date();
                  var annee   = now.getFullYear();
                  var mois    = now.getMonth() + 1;
                  var jour    = now.getDate();
                  var s=jour+"/"+mois+"/"+annee;
                 this.form.date=s;
                 console.log(this.form.date)
              }
          else
              console.log(this.form.date);
              this.user=this.form.PetOwner;
            }

 }
valide()
{
  this.formvalide=true;
}
Invalide()
{
  this.formvalide=false;
}

Exit()
{Swal.fire({
  title: 'Are you sure?',
  text: "Any changes will not be saved!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#01094E',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Continue'
          }).then((result) => {
          if (result.value) {

              this.router.navigateByUrl('/HomePage');
                             }
                              }
                  )
}
Pets(id)
{
    this.pets.Pets(id).subscribe(data=>
    {
    this.pet=data
    console.log(data)
    },
    err=>console.log(err.error.message));
}
peet()
{
   console.log(this.form.Pet)
}
write()
{
  console.log(this.form.PetOwner);

  console.log(this.form.Pet);
}
}
