import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';

import {ProfilComponent} from './components/profil/profil.component';
import {RequestComponent}from './components/password/request/request.component';
import {ResponseComponent}from './components/password/response/response.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import{HomePageComponent}from './Menu/home-page/home-page.component';
import{NewRXComponent} from'./Vet/new-rx/new-rx.component' ;
import{AddPetOwnerComponent}from'./SuperViseur/add-pet-owner/add-pet-owner.component';
import { PetOwnersComponent } from './SuperViseur/pet-owners/pet-owners.component';
import { ProfilPetOwnerComponent } from './SuperViseur/pet-owners/profil-pet-owner/profil-pet-owner.component';
import { VetsComponent } from './SuperViseur/vets/vets.component';
import { AddNewVEtComponent } from './SuperViseur/vets/add-new-vet/add-new-vet.component';
import { ProfilVetComponent } from './SuperViseur/vets/profil-vet/profil-vet.component';
import {PetComponent} from'./Vet/pet/pet.component';
import { AddPharamcyComponent } from './SuperViseur/pharmacy/add-pharamcy/add-pharamcy.component';
import { AddPharamcistComponent } from './SuperViseur/pharmacy/add-pharamcist/add-pharamcist.component';
import {NewTreatmentComponent } from './Vet/Treatment/new-treatment/new-treatment.component';
import { FormularyComponent } from './Vet/formulary/formulary.component';
import { PharmaciesComponent } from './SuperViseur/pharmacy/pharmacies/pharmacies.component';
import { PharmacyComponent } from 'src/app/SuperViseur/pharmacy/pharmacy.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' ,
  },
  {
     path: 'login', component: LoginComponent ,
 },
 { path:'HomePage', component: HomePageComponent ,
 },
 { path:'request-password', component: RequestComponent },
 { path:'response-password', component: ResponseComponent },
  { path: 'singnup', component: SignUpComponent ,canActivate:[BeforeLoginService] },
  { path:'profil', component: ProfilComponent ,
canActivate: [AfterLoginService] },
{ path:'NewRX', component: NewRXComponent ,
//canActivate: [AfterLoginService]
 },


  { path:'PetOwners', component: PetOwnersComponent,canActivate: [AfterLoginService] },
  { path:'addPetOwner', component: AddPetOwnerComponent,canActivate: [AfterLoginService] },
  { path:'PetOwnerProfil/:id', component:ProfilPetOwnerComponent  ,canActivate: [AfterLoginService],
 },
 { path:'NewPet/:id', component:PetComponent  ,canActivate: [AfterLoginService],
},
 { path:'Vets', component: VetsComponent,canActivate: [AfterLoginService]
},
 { path:'addVet', component: AddNewVEtComponent,canActivate: [AfterLoginService]
},
 { path:'VetProfil/:id', component: ProfilVetComponent,canActivate: [AfterLoginService]
},
{path: 'Pharmacies',
component:PharmaciesComponent,canActivate: [AfterLoginService]},
{path: 'addPharmacy',
component:AddPharamcyComponent,canActivate: [AfterLoginService]}
,{ path: 'addPharmacist/:id1/:id2', component:AddPharamcistComponent,canActivate: [AfterLoginService]
 },
 {path: 'addTreatment',
 component:NewTreatmentComponent,canActivate: [AfterLoginService]
},
 {path: 'formulary',
 component:FormularyComponent,canActivate: [AfterLoginService]
},
{path: 'pharmacies/pharmacy/:id',
 component:PharmacyComponent,canActivate: [AfterLoginService]
},
  {path: '**', redirectTo: 'HomePage'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }