
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
 @ViewChild('searchHi') searchHi: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  test=false;
   cred=false;
   testing()
   {
     this.test=true;
   }
   testing2()
   {
     this.cred=true;
   }
   init()
   {
     this.test=false;
     this.cred=false;
   }


}
