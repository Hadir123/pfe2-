import { Component, OnInit } from '@angular/core';
import { RxServiceService } from 'src/app/Services/rx-service.service';

@Component({
  selector: 'app-rx-history',
  templateUrl: './rx-history.component.html',
  styleUrls: ['./rx-history.component.css']
})
export class RxHistoryComponent implements OnInit {
order:any ;
order2=[];
config: any;
  constructor(private rx:RxServiceService) { }
  orderf: string = 'id'
  ngOnInit(): void {
    this.rx.RxHistory().subscribe(data=>{
      this.order=data ;
     this.order=this.order[0];
      console.log(this.order)
this.order2=this.order


    });
    this.config = {
      itemsPerPage: 7,
      currentPage: 1,
      totalItems: this.order2.length
    }
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
}
