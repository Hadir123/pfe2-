import { Component, OnInit } from '@angular/core';
import { RxServiceService } from 'src/app/Services/rx-service.service';
import { PetOwnerService } from 'src/app/Services/pet-owner.service';
import { element } from 'protractor';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
/*import  Echo from 'laravel-echo';

let echo = new Echo({
  broadcaster: 'pusher',
  key: 'e92d996a81c7f660c657',
  cluster: 'mt1',
  forceTLS: true
});*/
@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css']
})
export class OrderReviewComponent implements OnInit {

  constructor(private rx:RxServiceService ,private router:Router,
    private petowenr:PetOwnerService , private notifier:NotifierService) { }
order:any
Petowner:any ;
adresse:any ;
Pet:any;
newDrugs:any;
pharmacyName:string ;
all:number
  ngOnInit(): void {
this.order=this.rx.getOrder() ;
var $id=this.rx.getPetOwner() ;
if($id===null)
    {
this.router.navigateByUrl('/HomePage')
    }else
    {
this.pharmacyName=this.rx.getPharmacyName();
this.newDrugs=this.order.elements;
this.petowenr.PetOwner($id).subscribe(data=>{
  var test
  console.log(data );
   test= data ;
  this.Petowner=test.user ;
  this.adresse=test.adresse ;
}

)

this.Pet=this.rx.getPet() ;
this.all=parseFloat(this.order.subTotalPrice+this.order.amount+this.order.Tax)
this.order.total=this.all ;
    }
  }
Add()
{console.log('hi');
console.log(this.order)




  this.rx.createOrder(this.order).subscribe(data=>{console.log(data)
    this.notifier.notify("success", "  Done ,  ");
    this.router.navigateByUrl('/NewRX')
//this.subscribe() ;
/*var channel = echo.channel('order');
channel.listen('.order', function(order) {
  alert(JSON.stringify(order));
});
*/
  },
  err=>console.log(err)) ;
}
/*subscribe(){
  let echo = new Echo({
    broadcaster: 'pusher',
    key: PUSHER_API_KEY,
    cluster: PUSHER_CLUSTER
  });
  echo.channel('order')
    .listen('StatusLiked', (e)=>{
     var  data = e.location;
      //  this.updateMap(this.data);
    });
}*/
}
