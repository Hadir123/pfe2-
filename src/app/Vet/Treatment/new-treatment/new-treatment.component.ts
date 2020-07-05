import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-treatment',
  templateUrl: './new-treatment.component.html',
  styleUrls: ['./new-treatment.component.css']
})
export class NewTreatmentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Exit()
  {Swal.fire({
    title: 'Are you sure?',
    text: "Any changes will not be saved!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#4056A1',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Continue'
            }).then((result) => {
            if (result.value) {

                this.router.navigateByUrl('/HomePageVet');
                               }
                                }
                    )
  }
}
