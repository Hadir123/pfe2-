import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewRXComponent } from '../new-rx.component';
import { RxServiceService } from 'src/app/Services/rx-service.service';


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
@Output() event= new EventEmitter();
table=[]
  constructor(private rx:RxServiceService ) {

   }

  ngOnInit(): void {
   // this.getid(id)
   console.log('hi')

console.log(this.drugFromparent );
this.rx.ElementPrespection(this.drugFromparent.id).subscribe(data=>{
  console.log(data )
  this.element=data;
  this.element=this.element.data ;
})
  }

  onChange2(id: number, isChecked: boolean) {
var i= 0 ;
    if (isChecked) {
      console.log(id);
      this.event.emit(id) ;
     console.log(this.event)
      this.table[this.table.length]=id;
      console.log(this.table)
    }
    else
    console.log('tna7at hedhy'+id)
  }
}
