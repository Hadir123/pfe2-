import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
//import { HomePageComponent } from './Menu/home-page/home-page.component';
//import {MenuBarComponent} from'./components/menu-bar/menu-bar.component';
import { NewRXComponent } from './Vet/new-rx/new-rx.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { AddPetOwnerComponent } from './SuperViseur/add-pet-owner/add-pet-owner.component';
import { PetOwnersComponent } from './SuperViseur/pet-owners/pet-owners.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProfilPetOwnerComponent } from './SuperViseur/pet-owners/profil-pet-owner/profil-pet-owner.component';
//import { VetsComponent } from './SuperViseur/vets/vets.component';
import { AddNewVEtComponent } from './SuperViseur/vets/add-new-vet/add-new-vet.component';
import { ProfilVetComponent } from './SuperViseur/vets/profil-vet/profil-vet.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { PetComponent } from './Vet/pet/pet.component';
import { PetOwnerInfoComponent } from './Vet/pet/PetOwnerInfor/pet-owner-info/pet-owner-info.component';
import { PetOfPetwonerComponent } from './Vet/pet/PetOwnerInfor/PetOfPetowner/pet-of-petwoner/pet-of-petwoner.component';
//import { MenubarComponent } from './components/menubar/menubar.component';
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
import { NgxSpinnerModule } from "ngx-spinner";
import { Phase2NewRxComponent } from './Vet/new-rx/phase2-new-rx/phase2-new-rx.component';
import { OrderReviewComponent } from './Vet/new-rx/order-review/order-review.component';
import { RxHistoryComponent } from './Vet/rx-history/rx-history.component';
//import { NavbarVetComponent } from './components/navbar-vet/navbar-vet.component';
import { PasswordPetOwnerComponent } from './components/password-pet-owner/password-pet-owner.component';
import { SuperviseurModule } from './SuperViseur/superviseur.module';
import { DashboredComponent } from './pharmacist/dashbored/dashbored.component';
import { SidNavComponent } from './pharmacist/sid-nav/sid-nav.component';
import { TopnavComponent } from './pharmacist/topnav/topnav.component';
import { ManageUsersComponent } from './pharmacist/manage-users/manage-users.component';
import { ManageProductsComponent } from './pharmacist/manage-products/manage-products.component';
import { MyAcoountComponent } from './pharmacist/my-acoount/my-acoount.component';
import { FooterPharmacistComponent } from './pharmacist/footer-pharmacist/footer-pharmacist.component';
import { EditUserComponent } from './pharmacist/edit-user/edit-user.component';
import { AddUserComponent } from './pharmacist/add-user/add-user.component';
import { AddProductComponent } from './pharmacist/add-product/add-product.component';
import { EditProductComponent } from './pharmacist/edit-product/edit-product.component';
import { AddElementPrescriptionComponent } from './pharmacist/add-element-prescription/add-element-prescription.component';
import { ManageOrdersComponent } from './pharmacist/manage-orders/manage-orders.component';
import { ProductItemComponent } from './pharmacist/product-item/product-item.component';
import { ManageProductComponent } from './pharmacist/manage-product/manage-product.component';
import { ElementPrecriptionItemsComponent } from './pharmacist/element-precription-items/element-precription-items.component';
import { EditPharmacistComponent } from './pharmacist/edit-pharmacist/edit-pharmacist.component';
import { EditElementComponent } from './pharmacist/edit-element/edit-element.component';
import { OrderHistoryComponent } from './pharmacist/order-history/order-history.component';
import { OrderDetailsComponent } from './pharmacist/order-details/order-details.component';
import { PharmacistModule } from './pharmacist/pharmacist.module';

@NgModule({
  declarations: [
    AppComponent,
   // NavbarComponent,
   LoginComponent,
    SignUpComponent,
   ProfilComponent,
    PasswordComponent,
    RequestComponent,
    ResponseComponent,
  //
   //HomePageComponent,
////MenuBarComponent,
NewRXComponent,
/*AddPetOwnerComponent,
PetOwnersComponent,
ProfilPetOwnerComponent,*/
//VetsComponent,
//AddNewVEtComponent,
//ProfilVetComponent,
PetComponent,
PetOwnerInfoComponent,
PetOfPetwonerComponent,
//MenubarComponent,
 PharmacyComponent,
AddPharamcyComponent,
AddPharamcistComponent,
TableTreatmentComponent,
NewTreatmentComponent,
FormularyComponent,
PharmaciesComponent,
EditPharmacyComponent,
EditPharmacistAdminComponent,

ModalOptionComponent,

Phase2NewRxComponent,

OrderReviewComponent,

RxHistoryComponent,


//NavbarVetComponent,


PasswordPetOwnerComponent,
DashboredComponent, SidNavComponent,
TopnavComponent, ManageUsersComponent,
ManageProductsComponent, MyAcoountComponent,
 FooterPharmacistComponent, EditUserComponent,
  AddUserComponent, AddProductComponent, EditProductComponent,
   AddElementPrescriptionComponent, ManageOrdersComponent,
   ProductItemComponent, ManageProductComponent,
    ElementPrecriptionItemsComponent, EditPharmacistComponent,
     EditElementComponent, OrderHistoryComponent,
 OrderDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
 NgxSpinnerModule,
 SuperviseurModule,
PharmacistModule
// PharmacyModule

  ],
  providers: [JarwisService,
  TokenService, AuthService,
  {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService],
  bootstrap: [AppComponent]


})
export class AppModule { }
