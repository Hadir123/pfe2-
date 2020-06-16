import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfilComponent } from './components/profil/profil.component';
import { PasswordComponent } from './components/password/password.component';
import { RequestComponent } from './components/password/request/request.component';
import { ResponseComponent } from './components/password/response/response.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule   } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {JarwisService} from'./Services/jarwis.service';
import { TokenService } from './Services/token.service';
import { AuthService } from './Services/auth.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { NotifierModule } from "angular-notifier";
import { ToastrModule } from 'ngx-toastr';
import { HomePageComponent } from './Menu/home-page/home-page.component';
import {MenuBarComponent} from'./components/menu-bar/menu-bar.component';
import { NewRXComponent } from './Vet/new-rx/new-rx.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { AddPetOwnerComponent } from './SuperViseur/add-pet-owner/add-pet-owner.component';
import { PetOwnersComponent } from './SuperViseur/pet-owners/pet-owners.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProfilPetOwnerComponent } from './SuperViseur/pet-owners/profil-pet-owner/profil-pet-owner.component';
import { VetsComponent } from './SuperViseur/vets/vets.component';
import { AddNewVEtComponent } from './SuperViseur/vets/add-new-vet/add-new-vet.component';
import { ProfilVetComponent } from './SuperViseur/vets/profil-vet/profil-vet.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { PetComponent } from './Vet/pet/pet.component';
import { PetOwnerInfoComponent } from './Vet/pet/PetOwnerInfor/pet-owner-info/pet-owner-info.component';
import { PetOfPetwonerComponent } from './Vet/pet/PetOwnerInfor/PetOfPetowner/pet-of-petwoner/pet-of-petwoner.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { PharmacyComponent } from 'src/app/SuperViseur/pharmacy/pharmacy.component';
import { AddPharamcyComponent } from 'src/app/SuperViseur/pharmacy/add-pharamcy/add-pharamcy.component';
import { AddPharamcistComponent } from 'src/app/SuperViseur/pharmacy/add-pharamcist/add-pharamcist.component';
import { TableTreatmentComponent } from './Vet/new-rx/table-treatment/table-treatment.component';
import {NewTreatmentComponent } from './Vet/Treatment/new-treatment/new-treatment.component';
import { FormularyComponent } from './Vet/formulary/formulary.component';
import { PharmaciesComponent } from './SuperViseur/pharmacy/pharmacies/pharmacies.component';
import { EditPharmacyComponent } from './SuperViseur/pharmacy/edit-pharmacy/edit-pharmacy.component';
import { EditPharmacistAdminComponent } from './SuperViseur/pharmacy/edit-pharmacist-admin/edit-pharmacist-admin.component';
import { ModalOptionComponent } from './Vet/new-rx/modal-option/modal-option.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   LoginComponent,
    SignUpComponent,
   ProfilComponent,
    PasswordComponent,
    RequestComponent,
    ResponseComponent,
    HomePageComponent,
MenuBarComponent,
NewRXComponent,
AddPetOwnerComponent,
PetOwnersComponent,
ProfilPetOwnerComponent,
VetsComponent,
AddNewVEtComponent,
ProfilVetComponent,
PetComponent,
PetOwnerInfoComponent,
PetOfPetwonerComponent,
MenubarComponent,    PharmacyComponent,
AddPharamcyComponent,
AddPharamcistComponent,
TableTreatmentComponent,
NewTreatmentComponent,
FormularyComponent,
PharmaciesComponent,
EditPharmacyComponent,
EditPharmacistAdminComponent,

ModalOptionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    SnotifyModule,
    NotifierModule,
    ToastrModule,
    BrowserAnimationsModule,// ToastrModule added,
 BsDatepickerModule.forRoot(),
 MatDatepickerModule,NgSelectModule,
 Ng2SearchPipeModule,
    NgxPaginationModule,
 OrderModule,
 NgbModule,

// PharmacyModule


  ],
  providers: [JarwisService,
  TokenService, AuthService,
  {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService],
  bootstrap: [AppComponent]


})
export class AppModule { }
