import { Component, OnInit } from '@angular/core';
import { RxServiceService } from 'src/app/Services/rx-service.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  constructor(private rx:RxServiceService) { }
order:any ;
  ngOnInit(): void {
    this.rx.RxHistory().subscribe(data=>{
      this.order=data ;
     this.order=this.order[0] ;
      console.log(this.order)



    });
  }
}
