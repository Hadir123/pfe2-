import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';


import { VetRxService } from 'src/app/Services/vet-rx.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { PetOwnerService } from 'src/app/Services/pet-owner.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { TokenService } from 'src/app/Services/token.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public test=null;
  public user=null;
  public $id=null ;
  public token= null ;

  public adresse=null;

  public teste2=null ;
  show : boolean=true ;
 // img:null ;
image:File =null ;

  password:string =null;
  PasswordConfirmation:string=null ;
password1:string=null ;


  constructor(private http: HttpClient , private Token:TokenService  ,private vet:VetRxService ,private petowner:PetOwnerService,private router:Router,  private route: ActivatedRoute ,private notifier:NotifierService) { }

  ngOnInit() {


    this.token =this.Token.get();

     this.http.get('http://backend2.test:8800/api/Profil?token='+this.token).subscribe(data=>{console.log(data)

     this.test= data ;
     this.user=this.test.user ;
     this.adresse=this.test.adresse ;
console.log(this.user);
console.log(this.adresse)
  },
      err=>console.log(err)) ;

this.image=null ;
  }

  changeStatus()
 {
   this.show=!this.show ;

 }

 Save()
 { console.log(this.image);
 const formData = new FormData();
formData.append('image', this.image );
  console.log(formData);
  console.log(this.user);
  console.log(this.password) ;
  console.log(this.PasswordConfirmation);


  if(this.password===this.PasswordConfirmation)
  {

console.log(this.adresse)
/******* Upadate Adresse ******** */
this.petowner.UpdateAddress(this.adresse).subscribe(data=>{console.log(data)
 this.test=data
this.user.adresse_id=this.test.adresse_id ;
this.user.password=this.password1;
console.log(this.password1) ;
this.user.newPassword=this.password;
this.vet.ProfilUpdate(this.user).subscribe(data=>{console.log(data)
  /******************************  Update Photo********** */
  if(this.image!=null)
  {this.http.post('http://backend2.test:8800/api/tof?token='+this.token,formData).subscribe(res => {
        console.log(res);
        this.test=res ;
        this.image=null ;
        console.log(this.test);
        this.ngOnInit() ;
        this.changeStatus() ;
        alert('SUCCESS !!');},
        err=>console.log(err));

      }
      else
      {

this.ngOnInit() ;
this.changeStatus() ;
      }

}, err=>{console.log(err)
  this.notifier.show({
    type: "error",
    message: "Whoops, something went wrong. Probably.",
  });});
 },err=>{
    console.log(err)
  this.notifier.show({
    type: "error",
    message: "Whoops, something went wrong. Probably.",
  });

  });}
  else
  alert('password Not Equal') ;


 }

    onSelectFile(event) {
        console.log(event);
        this.image = <File>event.target.files[0]
        console.log(this.image)

    }



}
