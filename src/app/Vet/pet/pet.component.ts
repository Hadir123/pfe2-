import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  public $id=null ;
  items =['hadir'];
  public form={
    animal_name:null ,
    species:null ,
    breed:null ,
    Gender:null,
    Gender_Description:null ,
    weight : null ,
    weight_Unit:null ,
    color :null ,
    date_of_birth:null
  };
  constructor(private route: ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    this.$id =this.route.snapshot.params['id'];
    console.log(this.$id)
  }
  addItem() {
   // this.items[this.items.length] = document.getElementById("newItem");
    console.log(this.items)
}
save()
{console.log(this.form);

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
}
