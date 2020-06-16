import { Component, OnInit, ElementRef, ViewChild, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { VetRxService } from 'src/app/Services/vet-rx.service';
import { NgSelectConfig } from '@ng-select/ng-select';


import { from, Observable } from 'rxjs';
import { PetOwnerService } from 'src/app/Services/pet-owner.service';
import { PetService } from 'src/app/Services/pet.service';
import { RxServiceService } from 'src/app/Services/rx-service.service';
import { ModalOptionComponent } from './modal-option/modal-option.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-rx',
  templateUrl: './new-rx.component.html',
  styleUrls: ['./new-rx.component.css'],

})
export class NewRXComponent implements OnInit {
public user;
public drugs :any ;
public petss;

@ViewChild('childModalOption1') childModalOption1 :ModalOptionComponent;

  constructor(private router:Router , private modalService: NgbModal,private rx:RxServiceService,private Vet:VetRxService ,private config: NgSelectConfig, private petowenr :PetOwnerService ,private pets:PetService) {
  this.config.notFoundText = 'Not found';
    this.config.appendTo = 'body';
    this.config.bindValue = this.form.PetOwner;
  }
show:boolean =false ;
Drug :any ;
public formvalide=false;
public error;
form=
{

     PetOwner:null,

      Pet:this.petss,
      date:null,
Drug : null ,
};

 table:any;
Id:number ;

  ngOnInit(): void {
   this.user=this.petowenr.Petowners2().subscribe(data=>this.user=data) ;
this.rx.Drugs().subscribe(data=>{
  this.drugs=data
  console.log(data)
  this.drugs.map((i) => { i.fullName = i.drugName + ' ( ' + i.DrugTradeName+' ) '; return i; });
console.log(this.drugs)
} );


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


      this.form.Pet=null ;
      this.pets.Pets(this.form.PetOwner.id).subscribe(data=>
        {
        this.petss=data
        console.log(data)
        },
        err=>console.log(err.error.message));
      //this.Petss(this.form.PetOwner.id);
      console.log(this.petss);
      this.form.Pet=this.petss;
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
  confirmButtonColor: '#4056A1',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Continue'
          }).then((result) => {
          if (result.value) {

              this.router.navigateByUrl('/HomePage');
                             }
                              }
                  )
}
Petss(id)
{
    this.pets.Pets(id).subscribe(data=>
    {
    this.petss=data
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

drugChange()
{
//console.log(this.Drug) ;
if(this.Drug===null)
{
  this.show=!this.show
}
this.form.Drug=this.Drug ;
}

openModal() {

if(this.Drug!=null)
this.show=!this.show;

}
Save()
{
  console.log(this.table)
}

}
