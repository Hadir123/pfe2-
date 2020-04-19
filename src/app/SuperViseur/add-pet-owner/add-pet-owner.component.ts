import { Component, OnInit } from '@angular/core';
import { PetOwnerService } from 'src/app/Services/pet-owner.service';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-pet-owner',
  templateUrl: './add-pet-owner.component.html',
  styleUrls: ['./add-pet-owner.component.css']
})
export class AddPetOwnerComponent implements OnInit {
public num:-1;
public token;
public err=null ;
public user={
  email:"hhhhh",
name:"user"};


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
};
  constructor(private newOne : PetOwnerService ,private http: HttpClient ,private tokenn : TokenService) { }

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

this.newOne.onSubmit(this.form).subscribe(
  data=>console.log(data),
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
    console.log(this.form)
  }
  handelErro(err)
  {
    this.err=err.error.errors
  }
handleData(data)
{

}
ok()
{
  /*(async () => {

    const { value: user} = await Swal.fire({
      title: 'Select field validation',
      input: 'select',
      inputOptions:{
        email:this.user.email,
      name:this.user.name},
      inputPlaceholder: 'Select a fruit',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'oranges') {
            resolve()
          } else {
            resolve('You need to select oranges :)')
          }
        })
      }
    })

    if (fruit) {
      Swal.fire(`You selected: ${fruit}`)
    }

    })()*/
  }
}

