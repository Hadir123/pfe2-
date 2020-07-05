import { Component, OnInit } from '@angular/core';
import { VetRxService } from 'src/app/Services/vet-rx.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { PetOwnerService } from 'src/app/Services/pet-owner.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-profil-vet',
  templateUrl: './profil-vet.component.html',
  styleUrls: ['./profil-vet.component.css']
})
export class ProfilVetComponent implements OnInit {

  constructor(private vet:VetRxService ,private petowner:PetOwnerService,private router:Router,  private route: ActivatedRoute ,private notifier:NotifierService) { }
  public edite:boolean;
  public test=null;
  public user=null;
  public $id=null ;
  public search =null ;
  public adresse=null;
  public vetInfo=null ;
  public petowners=[] ;
  public relation=[];
  public relationD=[];
  public teste2=null ;
  CheckPet=[];
  public idvet=null ; public idpetowner=[] ;

    ngOnInit(): void {
           this.relation=[];
            this.$id =this.route.snapshot.params['id'];
           console.log(this.$id)
              this.vet.VetProfil(this.$id).subscribe(data=>{
             console.log(data);
             this.test=data;
              this.user=this.test.user ;
               console.log(this.user);
                this.adresse=this.test.adrrese;
                this.vetInfo=this.test.vet;
              console.log(this.vetInfo);
              console.log(this.adresse);
              this.edite=false;
            // this.petownersd=false ;
               },
          err=>console.log(err));

    }
  edit()
  {
    this.edite=true;
  }
  save(){
  console.log(this.user);
  console.log(this.vetInfo);
this.petowner.UpdateAddress(this.adresse).subscribe(data=>{console.log(data)
  this.test=data
this.user.adresse_id=this.test.adresse_id ;
this.vet.UpdateUser(this.user).subscribe(data=>{console.log(data)
  this.vet.UpdateVet(this.vetInfo).subscribe(data=>{console.log(data)
    this.notifier.notify("success", "  Done , User successfully modified. ");
    this.vet.VetProfil(this.$id).subscribe(data=>{
      console.log(data);
      this.test=data;
      this.user=this.test.user ;
      console.log(this.user);
   this.adresse=this.test.adrrese;
  this.vetInfo=this.test.vet;
  console.log(this.vetInfo);
   console.log(this.adresse);


    });},err=>{

    });
}, err=>{console.log(err)
  this.notifier.show({
    type: "error",
    message: "Whoops, something went wrong. Probably.",
  });
this.ProfilVet(this.user.id)});
 },err=>{
    console.log(err)
  this.notifier.show({
    type: "error",
    message: "Whoops, something went wrong. Probably.",
  });
this.ProfilVet(this.user.id);
  });
//this.ProfilVet(this.$id);


console.log(this.adresse);
this.edite=false ;
  }
  AttachPetowner()
  {console.log(this.user.id);
    this.vet.CarfulTeam(this.user.id).subscribe(data=>{
    console.log(data);
    console.log('hhhh');
  this.teste2=data
  this.petowner.Petowners2().subscribe(data=>{console.log(data)
    this.test=data ;
    this.petowners=this.test
  /*for( var i=0; i<this.test.length;i++)
    {
    this.petowners[i]=this.test[i];
    } */var d=[];
console.log(this.petowners);
//console.log(this.teste2[0].id_petOwner);
  var aux=null ;

    var k=0;
    var j=0;
for( j=0;j<this.teste2.length;j++)
   {  // this.changeStatue(false);
//console.log(this.teste2.length);

   aux=this.teste2[j].id_petOwner;
  // console.log(aux)
    var i=0;

 while ((i<this.petowners.length)&&(this.petowners[i].id!=aux))
    {
i++;
console.log(i);
//this.changeStatue(false);

    }
    console.log("***************")
    console.log(this.petowners[i]);
this.CheckPet[k]=this.petowners[i];
this.petowners.splice(i,1);
k++ ;
//this.onChange(this.petowners[i].id,true);

  }
console.log("hey kaml il boucle ")
    console.log(this.petowners);},
  err=>console.log(err));});

  }

  onChange(id: number, isChecked: boolean) {

    if (isChecked) {
      var i=0;
      while ((i<this.relation.length )&& (this.relation[i]!=id))
      {
       i++;
        }
  if(i===this.relation.length)
    { this.relation[this.relation.length]=id
    //  console.log(this.vet2)

    }

  console.log(this.relation)


  }
  else
  {
      var i=0;
      while ((i<this.relation.length )&& (this.relation[i]!=id))
      {
       i++;
        }
        this.relation.splice(i,1);
  }
console.log(this.relation)

  }
  saveRelation()
  { var relationtt ={
    id_petOwner:this.relation,
    id_vet:this.user.id ,
  };
   this.vet.PetOnwerAdd(relationtt).subscribe( data=>{console.log(data);},
 err=>console.log(err));

    console.log(relationtt);
    if(this.relationD.length!=0)
    {
      var relationtt ={
        id_petOwner:this.relationD,
        id_vet:this.user.id ,
      };
   this.vet.PetownerDelete(relationtt).subscribe( data=>{console.log(data);
  this.CheckPet=[]},
   err=>console.log(err));

      console.log(relationtt);

    this.relationD=[];
  }
  }
  onChange2(id: number, isChecked: boolean) {

    if (!isChecked) {
      console.log(id);
      var i=0;
      while ((i<this.relationD.length )&& (this.relationD[i]!=id))
      {
       i++;
        }
  if(i===this.relationD.length)
    { this.relationD[this.relationD.length]=id
    //  console.log(this.vet2)

    }

  console.log(this.relationD)


  }else
  {

  console.log('not');



  var i=0;
  while ((i<this.relationD.length )&& (this.relationD[i]!=id))
  {
   i++;
    }
    this.relation.splice(i,1);
}
console.log(this.relationD)


}
ProfilVet($id)
{
  this.vet.VetProfil(this.$id).subscribe(data=>{
    console.log(data);
    this.test=data;
     this.user=this.test.user ;
      console.log(this.user);
       this.adresse=this.test.adrrese;
       this.vetInfo=this.test.vet;
     console.log(this.vetInfo);
     console.log(this.adresse);
     this.edite=false;
   // this.petownersd=false ;
      },
 err=>console.log(err));

}
}
