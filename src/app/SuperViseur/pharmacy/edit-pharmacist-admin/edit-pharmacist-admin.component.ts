import { Component, OnInit, Input } from '@angular/core';
import { VetRxService } from 'src/app/Services/vet-rx.service';
import { PharmacyService } from 'src/app/Services/pharmacy.service';
import { PharmacyComponent } from '../pharmacy.component';
import {  NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-edit-pharmacist-admin',
  templateUrl: './edit-pharmacist-admin.component.html',
  styleUrls: ['./edit-pharmacist-admin.component.css']
})
export class EditPharmacistAdminComponent implements OnInit {

  constructor(private editService:VetRxService,private notifier:NotifierService,private pharmacyService:PharmacyService ,private all:PharmacyComponent) { }
@Input() user:any;
  ngOnInit(): void {
  }
test:any ;
  save()
  {
this.editService.UpdateUser(this.user).subscribe(data=>
  {
    console.log(data);
  //  this.ProfilPharmacist(this.all.pharmacy.id);
    this.notifier.notify("success", "  Done , Pharmacy Admin  successfully modified. ");
  },
  err=>{
    console.log(err)
    this.notifier.show({
      type: "error",
      message: "Whoops, something went wrong. Probably.",
    });

  });
  this.ProfilPharmacist(this.all.pharmacy.id);
  }



ProfilPharmacist($id)
{
  this.pharmacyService.pharmacistAdmin(this.all.pharmacy.id).subscribe(data=>{console.log(data)


    this.all.pharamcienAdmin=data;});
    this.all.edit2();
}
}
