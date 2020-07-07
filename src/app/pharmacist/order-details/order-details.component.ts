import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
statue:string;
  constructor(private orderService:OrderService , private router:Router,private route: ActivatedRoute,private notifier:NotifierService) { }
order:any
id=null ;
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;

    this.orderService.orderDetails(this.id).subscribe(data=>
      {this.order=data
        this.order=this.order.data
console.log(this.order)



      } ,err=>console.log(err)

      );

  }
  change(num)
  {
    switch(num) {
      case '0': {
        this.statue="created"
         break;
      }
      case '1': {
        this.statue='In Process ';
        //this.display=true;
         break;
      }
      case'2':{
        this.statue='pending assignment';
        break;
      }
      case'4':{
        this.statue='Shipped ';
        break;
      }
      case'3':{
        this.statue='Incomplete';
        break;
      }
      case'5':{
        this.statue='Canceled';
        break;
      }
      case'6':{
        this.statue='Pick Up';
        break;
      }
      case'7':{
        this.statue='ready';
        break;
      }

      case'8':{
        this.statue='Awaiting payment in pharmacy';
        break;
      }

    }
    console.log(this.statue)

  }
  update()
  {var form={'id':this.id,
'status':this.statue}
if(this.statue!=null)
{this.orderService.UpdateOrdr(form).subscribe(data=>{
  this.notifier.notify("success", "  Done , Status successfully modified. ");
this.router.navigateByUrl('/HomePagePharmacist/orders');
},err=>console.log(err));

}

  }

}
