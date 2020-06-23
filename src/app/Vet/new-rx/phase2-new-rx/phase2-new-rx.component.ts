import { Component, OnInit } from '@angular/core';
import { RxServiceService } from 'src/app/Services/rx-service.service';
import { PetOwnerService } from 'src/app/Services/pet-owner.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PharmacyService } from 'src/app/Services/pharmacy.service';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-phase2-new-rx',
  templateUrl: './phase2-new-rx.component.html',
  styleUrls: ['./phase2-new-rx.component.css']
})
export class Phase2NewRxComponent implements OnInit {
Petower: any ;
adresse :any ;
order : any ;
pharmcies:any ;
Pharmaci:any ;
payment :any ;
show:boolean  ;
  constructor(private rx:RxServiceService , private petowenr :PetOwnerService , private router:Router , private pharmacy:PharmacyService ) { }

  ngOnInit(): void {
    var $id=this.rx.getPetOwner() ;

   if($id===null)
    {
this.router.navigateByUrl('/HomePage')
    }else{

      this.order=this.rx.getOrder() ;
    console.log('hhhhhhhhh');
this.petowenr.PetOwner($id).subscribe(data=>{
  var test
  console.log(data );
   test= data ;
  this.Petower=test.user ;
  this.adresse=test.adresse ;
}
)}
this.pharmacy.Pharmacies2().subscribe(data=>{console.log(data);
var test ;
test=data ;
this.pharmcies=test.data ;})
this.show=false ;
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
write()
{}
Pharmacy()
{this.order.pharmacy_id=this.Pharmaci.id

console.log(this.order);
this.rx.setPharmacyName(this.Pharmaci.pharmacyName);
console.log(this.rx.getPharmacyName())
}
Next()
{
console.log(this.payment);
this.router.navigateByUrl('/orderReview')
}
onItemChange(value){
this.payment=value;
if(value==='1')
{
  this.show=!this.show
  console.log(this.show)
  this.order.paymentMethode='Pay Now'
}
else if(value==='2')
{this.show=false ;
  this.order.paymentMethode='Make payment by pet owner'

}
else
if(value==='3')
{this.show=false ;
  this.order.paymentMethode='Make payment at pharmacy'

}
else

console.log('hi');
this.show=false ;
}
}
