import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PetService } from 'src/app/Services/pet.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  public $id=null ;
  public species= [ ];
  public breeds=[];
  public test = null;

  public form={
    animal_name:null ,
    pet_owner_id:null,
    species_id:null ,
    breed_id:null ,
    gender:'male',
    Gender_Description:null ,
    current_weight : null ,
    current_weight_unit:'kg' ,
    color :null ,
    date_of_birth:null
  };
  constructor(private route: ActivatedRoute ,private notifier:NotifierService,private router:Router, private pet:PetService) { }

  ngOnInit(): void {
    this.$id =this.route.snapshot.params['id'];
    console.log(this.$id)
    this.pet.BreedsAndSpecies().subscribe(data=>{
      console.log(data)

    this.test=data
    for(var i=0 ; i<this.test.breeds.length;i++)
    {
    this.breeds[i]=this.test.breeds[i] ;
    console.log(this.breeds[i].breed
      )
    }
    this.species=this.test.species,
    console.log(this.breeds)
    }


      ,err=>console.log(err));
  }

save()
{this.form.pet_owner_id=this.$id;
  console.log(this.form);
this.pet.Registre(this.form).subscribe(data=>{
  console.log(data);
  this.notifier.notify("success", "Done!,Pet added ");
  this.router.navigateByUrl('/NewRX');},err=>console.log(err)
  );
}
Exit()
{Swal.fire({
  title: 'Are you sure?',
  text: "Any changes will not be saved!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#01094E',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Continue'
          }).then((result) => {
          if (result.value) {

              this.router.navigateByUrl('/NewRX');
                             }
                              }
                  )
}
selectBreed(id)
{ this.form.breed_id=id}

selectSpecies(id)
{this.form.species_id=id;}
genderrr(num)
{ console.log(num)
  if(num===1)
  {
    this.form.gender='male';
    console.log(this.form.gender);
  }else
 {this.form.gender='Female';
  console.log(this.form.gender);}

}
weight(num)
{
  if(num===1)
  {
    this.form.current_weight_unit='kg';
    console.log(this.form.current_weight_unit);
  }else

 { this.form.current_weight_unit='pounds';
  console.log(this.form.current_weight_unit);}

}
}
