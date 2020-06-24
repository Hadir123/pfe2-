import { Component, OnInit, ElementRef, ViewChild, Output, Input, EventEmitter } from '@angular/core';
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
import { NgxSpinnerService } from 'ngx-spinner';
import { order } from './order';

import { elements } from './element';

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

  constructor(private router:Router , private spinner: NgxSpinnerService,private modalService: NgbModal,private rx:RxServiceService,private Vet:VetRxService ,private config: NgSelectConfig, private petowenr :PetOwnerService ,private pets:PetService) {
  this.config.notFoundText = 'Not found';
    this.config.appendTo = 'body';
    this.config.bindValue = this.form.PetOwner;
  }
show:boolean =false ;
Drug :any ;
able:boolean=false ;
public formvalide=false;
public error;
form=
{

     PetOwner:null,

      Pet:this.petss,
      date:null,
Drug : null ,
};
elem=[] ;
 table=[];
 tabe2=[];
 test=[];
 order=new order() ;
 elemts = new elements();
Id:number ;

  ngOnInit(): void {
   this.user=this.petowenr.Petowners2().subscribe(data=>{this.user=data},

    err=>{/*if(err.status===401)

this.router.navigateByUrl('/login')*/

    }) ;
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
      this.user=this.form.PetOwner;
this.rx.setPetOwner(this.form.PetOwner.id);
      this.order.adresse_id=this.form.PetOwner.adresse_id ;
      this.spinner.show();

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000);
      this.form.Pet=null ;
      this.pets.Pets(this.form.PetOwner.id).subscribe(data=>
        {
        this.petss=data
        console.log(data)
        },
        err=>console.log(err.error.message));

      console.log(this.petss);
      this.form.Pet=this.petss;

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
    err=>{console.log(err.error.message)
   /* if(err.status===401)

    this.router.navigateByUrl('/login');*/});
}
peet()
{
   console.log(this.form.Pet);
   this.rx.setPet(this.form.Pet)
   this.order.pet_id=this.form.Pet.id;

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
  this.show=false ;
}
this.form.Drug=this.Drug ;
}

openModal() {

if(this.Drug!=null)
this.show=!this.show;

}
Save()
{//this.show=!this.show
  this.able=false ;
console.log('save it');
console.log(this.table);
console.log(this.tabe2);
var res =this.countOccurences(this.table,this.tabe2)
  console.log(res);
 let body ={
    'ok':res
  }
 var test ;
  this.rx.test(body).subscribe(data=>{
    console.log(data)
   test =data ;
this.elem=test.j;
this.able=true ;})
}
hi($event)
{console.log('hi');
console.log($event)
this.table[this.table.length]=$event ;
this.elem=$event
}
countOccurences(tab,tabe2){
var i=0;
 while(i<tab.length)
 {
for(var j=0; j<tabe2.length; j++)
 {
  if (tabe2[j]===tab[i]) {
    tab.splice(i,1);
  }
} i++;
  }
  return tab ;

}
Clear($event)
{ console.log('hi');
  console.log($event);
  this.tabe2[this.tabe2.length]=$event ;
}

}
