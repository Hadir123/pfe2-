import { Component, OnInit } from '@angular/core';
import { RxServiceService } from 'src/app/Services/rx-service.service';

@Component({
  selector: 'app-rx-history',
  templateUrl: './rx-history.component.html',
  styleUrls: ['./rx-history.component.css']
})
export class RxHistoryComponent implements OnInit {
order:any ;
  constructor(private rx:RxServiceService) { }

  ngOnInit(): void {
    this.rx.RxHistory().subscribe(data=>{
      this.order=data ;
      this.order=this.order.data ;
      console.log(this.order)



    });
  }

}
