import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacyComponent } from '../pharmacy.component';
import { PharmacyService } from 'src/app/Services/pharmacy.service';
import { ThrowStmt } from '@angular/compiler';
import { NotifierService } from 'angular-notifier';
import { PetOwnerService } from 'src/app/Services/pet-owner.service';

@Component({
  selector: 'app-edit-pharmacy',
  templateUrl: './edit-pharmacy.component.html',
  styleUrls: ['./edit-pharmacy.component.css']
})
export class EditPharmacyComponent implements OnInit {

  constructor(private router:Router ,private petowner:PetOwnerService, private all:PharmacyComponent ,private notifier:NotifierService ,private pharmacyService:PharmacyService) { }
@Input()
pharmacy:any;

@Input() adresse:any ;
@Input() show:boolean ;
@Input() isOpen:boolean ;
test:any;
  ngOnInit(): void {
    console.log(this.pharmacy);
    console.log(this.adresse);

  }
 form:
  {
    adresse: any ,
    pharmacy : any
  }
save()
{
console.log(this.pharmacy);
this.petowner.UpdateAddress(this.adresse).subscribe(data=>{
var test2
test2=data ;
  this.pharmacy.adresse_id=test2.adresse_id

    this.pharmacyService.UpdatePharmacy(this.pharmacy).subscribe(data=>
  {this.notifier.notify("success", "  Done , Pharmacy successfully modified. ");
   this.consulterPharmacy(this.pharmacy.id)
  },
  err=>{console.log(err)

    this.notifier.show({
      type: "error",
      message: "Whoops, something went wrong. Probably.",
    });
    this.consulterPharmacy(this.pharmacy.id)

  }

);
},
err=>{console.log(err)
  //this.pharmacy=this.test;
  this.notifier.show({
    type: "error",
    message: "Whoops, something went wrong. Probably.",
  });
  this.consulterPharmacy(this.pharmacy.id)


}

  );
}


consulterPharmacy($id)
{
  this.pharmacyService.pharmacy($id).subscribe(data=>{console.log(data)
    this.test=data ;

    this.adresse=this.test.adresse ;
    this.pharmacy=this.test.pharmacy ;
    this.all.pharmacy=this.pharmacy;});
    this.all.edit();
}
}
