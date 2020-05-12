import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { VetRxService } from 'src/app/Services/vet-rx.service';

@Component({
  selector: 'app-add-new-vet',
  templateUrl: './add-new-vet.component.html',
  styleUrls: ['./add-new-vet.component.css']
})
export class AddNewVEtComponent implements OnInit {

  public num:-1;
public token;
public err=null ;
public vets=null;
petowner=null
public relation ={
  id_petOwner:null ,
  id_vet:null,
};
public form=
{ name:null,
  last_name:null ,
  date_of_birth:null ,
  gender:null,
  email:null ,
  phone:null ,
  directLine:null ,
  fax:null ,
  speciality:null,
  adresse:null ,
  street:null ,
  postal_code:null ,
  city:null ,
  Hospital:"Haygard",
  is_superviseur:0 ,
};
vet2=[] ;
  constructor(private router :Router,private tokenn : TokenService ,private notifier:NotifierService, private vet :VetRxService) { }

  ngOnInit(): void {
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
  /**************/
  Save()
  {
console.log(this.form);

this.vet.AddVet(this.form).subscribe(data=>{console.log(data)
this.handleData(data)},
err=>{console.log(err)
this.handelErro(err)});
  }
  handelErro(err)
  {
    this.err=err.error.errors
  }
handleData(data)
{

this.notifier.notify("success", "Done!,Vet added ");
this.router.navigateByUrl('/Vets');
}


onChange(isChecked: boolean) {

  if (isChecked) {
   console.log('cheked');
   this.form.is_superviseur=1 ;
   console.log( this.form.is_superviseur);
} else
{console.log('not cheked');
this.form.is_superviseur=0 ;
console.log( this.form.is_superviseur);
}
}



}
