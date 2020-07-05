import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PharmacyService } from 'src/app/Services/pharmacy.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css'],
  animations: [
    trigger('openClose', [
    // ...
    state('open', style({
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow'
    })),
    state('closed', style({
    height: '100px',
    opacity: 0.5,
    backgroundColor: 'green'
    })),
    transition('open => closed', [
    animate('1s')
    ]),
    transition('closed => open', [
    animate('0.5s')
    ]),
    ]),
    ]
})
export class PharmacyComponent implements OnInit {
  id1=null ;
  id2=null;
  pharmacy:any ;
  adresse:any ;
  pharamcienAdmin:any ;
  edite=true ;
  isOpen = false ;
  isOpen2=false ;
show=true ;
  constructor(private route: ActivatedRoute , private pharmacyService:PharmacyService) { }

  ngOnInit(): void {
    this.id1 =this.route.snapshot.params['id'];
    console.log(this.id1);
    this.pharmacyService.pharmacy(this.id1).subscribe(data=>{console.log(data)
    this.pharmacy=data ;
    this.adresse=this.pharmacy.adresse ;
    this.pharmacy=this.pharmacy.pharmacy ;




    });
    this.pharmacyService.pharmacistAdmin(this.id1).subscribe(data=>{console.log(data)
    {this.pharamcienAdmin=data ;}}
    )

  }
edit()
{this.show=!this.show ;
this.isOpen=!this.isOpen;

}
edit2()
{this.show=!this.show ;
  this.isOpen2=!this.isOpen2;

}
}
