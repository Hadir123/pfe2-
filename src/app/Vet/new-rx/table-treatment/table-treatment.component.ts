import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { RxServiceService } from 'src/app/Services/rx-service.service';
import { $ } from 'protractor';
import { Observable } from 'rxjs';
import { elements } from '../element';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table-treatment',
  templateUrl: './table-treatment.component.html',
  styleUrls: ['./table-treatment.component.css']
})
export class TableTreatmentComponent implements OnInit {
@Input() table:any ;;
@Input() order:any;
@Input() date:any ;
  constructor(private rx:RxServiceService ,private router:Router) { }

test=[]
show:boolean=false ;
newDrugs=[];
@ViewChild('id') autoRefil: ElementRef;
element = new elements() ;
  ngOnInit(): void {

    console.log(this.table);
    this.newDrugs = this.table.map(elm=>{
      return {
        "form" : elm.drugFromName,
        "drug" :elm.drugName,
        "drugTradeName":elm.drugTradeName,
        "strength":elm.drugStrengthName,
        "type":elm.drugTypeName,
        "qty":1,
        "autorefill":false,
        "id":elm.drug_id,
        "gp_code":elm.gpCode,
        "price":elm.price,
        "size":elm.size,
        "refills":0,
        'endDate':null ,
        'discription':"" ,

      }
    });
    console.log("New Drugs", this.newDrugs);


  }

        DeleteElement(id:number)
        {
          var index: number = this.table.indexOf(id);
          this.newDrugs.splice(index, 1);
        }


        all()
        {var e ;
        var all2 :number=0;
        this.test=[];
       this.order.RxOrderDate=this.date ;
          for(var i = 0 ; i<this.newDrugs.length;i++){

        console.log(this.newDrugs[i].price)

        all2+=parseFloat(this.newDrugs[i].price)
        console.log(all2)
        this.test[i]=this.newDrugs[i] ;
          }
        this.order.elements=this.test ;
        this.order.subTotalPrice=all2 ;
          console.log(this.order);
          this.rx.setOrder(this.order);
          console.log(this.rx.getOrder() )
          //console.log(this.elem)
          this.router.navigateByUrl('/NewRX/payment');
        }


}
