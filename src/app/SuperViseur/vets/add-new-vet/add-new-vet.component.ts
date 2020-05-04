import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

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
  date_of_birth:null ,
  last_name:null ,
  email:null ,
  phone:null ,
  gender:null,
  age:null ,
  adresse:null ,
  street:null ,
  postal_code:null ,
  city:null ,
  Hospital:"Haygard",
  id:null ,
};
vet2=[] ;
  constructor(private router :Router,private tokenn : TokenService ,private notifier:NotifierService) { }

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

/*this.newOne.onSubmit(this.form).subscribe(
  data=>{

this.handleData(data);
  },
  err=>{
    this.handelErro(err);
    if (this.err.gender)
    {
      this.err.gender="check the sexe please"
    }
    if (this.err.street)
    {
      this.err.street="The State is required"
    }
  }
);
    console.log(this.form);
*/
  }
  handelErro(err)
  {
    this.err=err.error.errors
  }
handleData(data)
{
this.petowner=data.user
console.log(this.petowner)
  console.log(this.petowner.id)
  if(this.petowner.id!= null )
 {var id = this.petowner.id ;
   for (var i=0;i<this.vet2.length;i++)
{this.relation.id_petOwner=id ;
  console.log(id);
  this.relation.id_vet=this.vet2[i];
  console.log(this.vet2[i]);
  console.log(this.relation);
    //   this.newOne.vetsAdd(this.relation).subscribe( data=>{console.log(data);},
    //    err=>console.log(err));
}}
this.notifier.notify("success", "Done!,Pet Owner added ");
this.router.navigateByUrl('/PetOwners');
}
Vets()
{
 /*// this.newOne.Vets().subscribe(data=>{
  //console.log(this.vets[0][0].id)
  //this.vets=data ;
for( var i=0; i<this.vets.length;i++)
{
this.vets[i]=this.vets[i][0];
}
console.log(this.vets)},
 // err=>console.log(err));*/
}

onChange(id: number, isChecked: boolean) {

  if (isChecked) {
    var i=0;
    while ((i<this.vet2.length )&& (this.vet2[i]!=id))
    {
     i++;
      }
if(i===this.vet2.length)
  { this.vet2[this.vet2.length]=id
  //  console.log(this.vet2)

  }
  //console.log(this.vet2)
}
}
 saveVet()
 {
console.log(this.vet2);
 }


}
