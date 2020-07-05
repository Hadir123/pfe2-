import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule   } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { HomePageComponent } from '.././Menu/home-page/home-page.component';
import { NavbarVetComponent } from '.././components/navbar-vet/navbar-vet.component';
import { AppRoutingModule } from '.././app-routing.module';
import { NewRXComponent } from '.././Vet/new-rx/new-rx.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import{MenubarComponent}from'.././components/menubar/menubar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SnotifyModule } from 'ng-snotify';
import { NotifierModule } from 'angular-notifier';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VetsComponent } from '.././SuperViseur/vets/vets.component';
import { AppModule } from '../app.module';
import { AddNewVEtComponent } from './vets/add-new-vet/add-new-vet.component';
import { Router, RouterOutlet } from "@angular/router";
import { ProfilVetComponent } from './vets/profil-vet/profil-vet.component';
import { PetOwnersComponent } from './pet-owners/pet-owners.component';
import { AddPetOwnerComponent } from './add-pet-owner/add-pet-owner.component';
import { ProfilPetOwnerComponent } from './pet-owners/profil-pet-owner/profil-pet-owner.component';
import { ProfilComponent } from '../components/profil/profil.component';
import { PharmaciesComponent } from './pharmacy/pharmacies/pharmacies.component';
import { AddPharamcyComponent } from './pharmacy/add-pharamcy/add-pharamcy.component';
import { AddPharamcistComponent } from './pharmacy/add-pharamcist/add-pharamcist.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { Phase2NewRxComponent } from '../Vet/new-rx/phase2-new-rx/phase2-new-rx.component';
import { AfterLoginService } from '../Services/after-login.service';
import { OrderReviewComponent } from '../Vet/new-rx/order-review/order-review.component';
import { RxHistoryComponent } from '../Vet/rx-history/rx-history.component';
import { NewTreatmentComponent } from '../Vet/Treatment/new-treatment/new-treatment.component';
import { FormularyComponent } from '../Vet/formulary/formulary.component';
import { PetComponent } from '../Vet/pet/pet.component';

const routes: Routes = [
  {
    path: '',
    component:MainContentComponent,
  children: [
   {
       path:'',
       component:HomePageComponent
      },
      { path:'profil', component: ProfilComponent ,
 },
      { path:'addVet', component: AddNewVEtComponent
},
     {
        path:'Vets'
      ,
      component:VetsComponent
      },
      { path:'VetProfil/:id', component: ProfilVetComponent
},
{ path:'PetOwners', component: PetOwnersComponent, },
{ path:'addPetOwner', component: AddPetOwnerComponent, },
{ path:'PetOwnerProfil/:id', component:ProfilPetOwnerComponent
},
{ path:'profil', component: ProfilComponent ,
 },

{path: 'Pharmacies',
component:PharmaciesComponent},
{path: 'addPharmacy',
component:AddPharamcyComponent,}
,{ path: 'addPharmacist/:id1/:id2', component:AddPharamcistComponent
 },
 {path: 'pharmacies/pharmacy/:id',
 component:PharmacyComponent,},
 { path:'NewRX', component: NewRXComponent ,

  },
  { path:'NewRX/payment', component:  Phase2NewRxComponent,
 canActivate: [AfterLoginService]
   },
   {path:'orderReview',component:OrderReviewComponent,}
 ,{path:'orderHistory',component:RxHistoryComponent,},
 {path: 'addTreatment',
 component:NewTreatmentComponent,
},
 {path: 'formulary',
 component:FormularyComponent,
},
{ path: '**', redirectTo: 'HomePageVet'},
{ path:'NewPet/:id', component: PetComponent ,}

   ],
  },
];
@NgModule({
  declarations: [MainContentComponent, NavbarVetComponent, MenubarComponent, VetsComponent, AddNewVEtComponent ,ProfilVetComponent ,PetOwnersComponent, ProfilPetOwnerComponent, AddPetOwnerComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    FormsModule, NgxPaginationModule ,ReactiveFormsModule,
    NgxSpinnerModule,

    NotifierModule,
    ToastrModule,
 MatDatepickerModule,NgSelectModule,
 Ng2SearchPipeModule,
    NgxPaginationModule,
 OrderModule,
 NgbModule,
 NotifierModule,

 //RouterModule.forRoot(routes),

  ],
})
export class SuperviseurModule { }
