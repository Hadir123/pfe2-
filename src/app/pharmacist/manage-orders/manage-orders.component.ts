import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { RxServiceService } from 'src/app/Services/rx-service.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  newPlacehold="search by";
  display=false;
  form={
    'field':null ,
    'searchQuery':null
    }
    config: any;

    @ViewChild('searchSelect') field: ElementRef;
  @ViewChild('searchInput') searchQuery: ElementRef;
  order:any ;
  order2=[]
  orderf: string = 'id'
  constructor(private rx:RxServiceService) { }

  ngOnInit(): void {
    console.log('hi')
    this.rx.RxHistory().subscribe(data=>{
      this.order=data ;
      console.log(data )
     this.order2=this.order[0] ;
      console.log(this.order)



    });
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.order2.length
    }
  }

  change(num) {
    switch(num) {
      case '1': {
        this.newPlacehold="Search by Order #"
         break;
      }
      case '2': {
        this.newPlacehold='Select Status';
        this.display=true;
         break;
      }
      case'3':{
        this.newPlacehold='Search by Pet Owner';
        break;
      }
      case'4':{
        this.newPlacehold='Search by Patient Name';
        break;
      }
      case'5':{
        this.newPlacehold='Search by Vet Name';
        break;
      }
      case'6':{
        this.newPlacehold='Search by Vet Email';
        break;
      }
      case'7':{
        this.newPlacehold='Search by Order Date';
        break;
      }
      default: {
          this.newPlacehold='Search by';
         break;
      }
    }
  }


  exit(){
    this.ngOnInit();
    this.change('0');
    this.field.nativeElement.value='0';
    this.newPlacehold="search by";
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
}
