import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PharmacyService } from 'src/app/Services/pharmacy.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-pharamcist',
  templateUrl: './add-pharamcist.component.html',
  styleUrls: ['./add-pharamcist.component.css']
})
export class AddPharamcistComponent implements OnInit {
id1=null ;
id2=null;
edit=true ;
public form=
{ name:null,
  last_name:null ,
  date_of_birth:null ,
  gender:null,
  email:null ,
  phone:null ,
  adresse_id:this.id1 ,
  pharmacy_id:this.id2 ,
admin:'1'
};
  constructor(private router:Router ,private route: ActivatedRoute ,private notifier:NotifierService, private pharmacy :PharmacyService) { }

  ngOnInit(): void {
    this.id1 =this.route.snapshot.params['id1'];
    console.log(this.id1);
    this.id2=this.route.snapshot.params['id2'];
    console.log(this.id2);
    this.form.adresse_id=this.id1 ;
    this.form.pharmacy_id=this.id2;
    if((this.id1==='null')&&(this.id2==='null'))
    { alert("y3tk kasra");
      this.router.navigateByUrl('addPharmacy');
    }
  }
  chekrbdclick(num)
  {
    if( num ===1)
    {
this.form.gender="women";
console.log(this.form.gender);
    }
    else
    if(num===0)
     {
      this.form.gender="man";
      console.log(this.form.gender);
          }
else
{
  console.log("hiiiiiiiiii put somthing ")
}
  }
save()
{console.log(this.form)
  this.pharmacy.addPharmacistAdmin(this.form).subscribe(data=>
    { console.log(data);
      this.notifier.notify("success", "Done!,Pharmacy added ");
      this.router.navigateByUrl('/Pharmacies');
  },
    err=>console.log(err));
}
}
