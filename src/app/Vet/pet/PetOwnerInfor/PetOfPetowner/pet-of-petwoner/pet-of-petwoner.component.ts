import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/Services/pet.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-of-petwoner',
  templateUrl: './pet-of-petwoner.component.html',
  styleUrls: ['./pet-of-petwoner.component.css']
})
export class PetOfPetwonerComponent implements OnInit {

  constructor(private pet:PetService ,private route:ActivatedRoute) { }
public $id :null ;
public pets;
public visible=false ;
  ngOnInit(): void {
    this.$id =this.route.snapshot.params['id'];
    console.log(this.$id)
    this.pet.Pets(this.$id).subscribe(
      data=>{this.pets=data;
        if(this.pets.length>0)
        {this.visible=true ;}},);
  }

}
