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

const routes: Routes = [
  { path: 'login', component: LoginComponent ,
  canActivate:[BeforeLoginService]},
  { path: 'singnup', component: SignUpComponent ,canActivate:[BeforeLoginService] },
  { path:'profil', component: ProfilComponent ,
canActivate: [AfterLoginService] },

{ path:'HomePage', component: HomePageComponent ,
canActivate: [AfterLoginService] },
  { path:'request-password', component: RequestComponent ,canActivate: [BeforeLoginService]},
  { path:'response-password', component: ResponseComponent,canActivate: [BeforeLoginService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
