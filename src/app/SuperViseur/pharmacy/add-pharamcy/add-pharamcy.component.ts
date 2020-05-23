import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PharmacyService } from 'src/app/Services/pharmacy.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pharamcy',
  templateUrl: './add-pharamcy.component.html',
  styleUrls: ['./add-pharamcy.component.css']
})
export class AddPharamcyComponent implements OnInit {
id_addres=null ;
pharmacie=null ;
id_pharmacy=null ;
test= null ;
form={
pharmacyName:null ,
email :null ,
phone : null  ,
fax :null ,
adresse:null ,
 street:null ,
 postal_code:null ,
city:null ,
}
  constructor( private route: Router, private pharmacy : PharmacyService) { }

  ngOnInit(): void {
  }
save()
{ console.log(this.form)

 let timerInterval
Swal.fire({
  title: '',
  html: 'it will be save.',
  timer: 1000,
  timerProgressBar: true,
  onBeforeOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
      //  b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  onClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
  this.pharmacy.AddPharmacy(this.form).subscribe(data=>
    { console.log(data);
      var id2 ;
    this.test=data ;

    this.pharmacie=this.test ;
    console.log(this.pharmacie);
  this.id_pharmacy=this.test.id ;
 id2=this.test.adresse_id;
console.log(id2);
console.log(this.id_pharmacy);
  this.route.navigateByUrl('addPharmacist/'+id2+'/'+this.id_pharmacy);
  },
    err=>console.log(err));


/*
*/


}
}
