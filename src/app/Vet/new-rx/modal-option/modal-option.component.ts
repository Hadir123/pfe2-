import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewRXComponent } from '../new-rx.component';
import { RxServiceService } from 'src/app/Services/rx-service.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-modal-option',
  templateUrl: './modal-option.component.html',
  styleUrls: ['./modal-option.component.css']
})
export class ModalOptionComponent implements OnInit {
show2:boolean=false ;
//@Input() Drug :any;
drugFromparent :any
@Input() set Drug (Drug:any )
{
this.drugFromparent =Drug;
}
id2 ;
public element: any ;
@Output() event= new EventEmitter<number>();
@Output() event2= new EventEmitter<number>();

table=[]
  constructor(private rx:RxServiceService,private spinner: NgxSpinnerService ) {

   }

  ngOnInit(): void {
   // this.getid(id)
   console.log('hi')

console.log(this.drugFromparent );
this.rx.ElementPrespection(this.drugFromparent.id).subscribe(data=>{
  console.log(data )
  this.element=data;
  this.element=this.element.data ;
});
this.spinner.show();

setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 1000);
}


  onChange2(id: number, isChecked: boolean) {
var i= 0 ;
    if (isChecked) {
      console.log(id);

      this.table[this.table.length]=id;
      console.log(this.table)
      this.event.emit(id)

    }
    else
   { console.log('tna7at hedhy'+id)
    var index: number = this.table.indexOf(id);
   this.table.splice(index, 1);
   this.event2.emit(id)

 }
 /*for(var i =0 ; i<this.table.length;i++){
 this.event.emit(this.table[i])
 }*/
  }

}
