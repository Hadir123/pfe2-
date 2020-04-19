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
import{ManageUserComponent}from'./SuperViseur/manage-user/manage-user.component';
import{AddPetOwnerComponent}from'./SuperViseur/add-pet-owner/add-pet-owner.component';

import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full' ,
   },
  {
     path: 'login', component: LoginComponent ,
 },
  { path: 'singnup', component: SignUpComponent ,canActivate:[BeforeLoginService] },
  { path:'profil', component: ProfilComponent ,
canActivate: [AfterLoginService] },

{ path:'NewRX', component: NewRXComponent ,
canActivate: [AfterLoginService] },

{ path:'HomePage', component: HomePageComponent ,
canActivate: [AfterLoginService] },
  { path:'request-password', component: RequestComponent ,canActivate: [BeforeLoginService]},
  { path:'response-password', component: ResponseComponent,canActivate: [BeforeLoginService] },
  { path:'MangeUsers', component: ManageUserComponent ,
  canActivate: [AfterLoginService] },
  { path:'addPetOwner', component: AddPetOwnerComponent,canActivate: [AfterLoginService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
