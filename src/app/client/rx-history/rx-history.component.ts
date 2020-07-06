import { Component, OnInit } from '@angular/core';
import { RxServiceService } from 'src/app/Services/rx-service.service';

@Component({
  selector: 'app-rx-history',
  templateUrl: './rx-history.component.html',
  styleUrls: ['./rx-history.component.css']
})
export class RxHistoryComponent implements OnInit {
  order:any ;
  config: any;

test=[] ;
constructor(private rx:RxServiceService) {


}
  ngOnInit(): void {
    this.rx.RxHitstoryClient().subscribe(data=>{
      this.order=data ;
      //this.order=this.order.data ;
var j =0 ;
for(var i=0; i<this.order.length; i++)
{var aux=this.order[i];
  for(j=0 ; j<aux.length; j++)
  {this.test[this.test.length]=aux[j]
  }
}
      console.log(this.test)



    });
    this.config = {
      itemsPerPage: 7,
      currentPage: 1,
      totalItems: this.test.length
    }
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
}
