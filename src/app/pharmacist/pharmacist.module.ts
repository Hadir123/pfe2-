import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManageUsersComponent } from './manage-users/manage-users.component';

import { DashboredComponent } from './dashbored/dashbored.component';
import { FooterPharmacistComponent } from './footer-pharmacist/footer-pharmacist.component';
import {SidNavComponent} from'./sid-nav/sid-nav.component';
import {TopnavComponent} from'./topnav/topnav.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotifierModule } from 'angular-notifier';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ManageProductComponent} from './manage-product/manage-product.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {AddUserComponent} from './add-user/add-user.component';
import {AddProductComponent} from './add-product/add-product.component';
import {EditProductComponent} from'./edit-product/edit-product.component';
import{AddElementPrescriptionComponent}from'./add-element-prescription/add-element-prescription.component';
import{ManageOrdersComponent} from'./manage-orders/manage-orders.component';
import {EditPharmacistComponent} from './edit-pharmacist/edit-pharmacist.component';
import{EditElementComponent}from'./edit-element/edit-element.component';
import {OrderDetailsComponent} from './order-details/order-details.component'
import { HttpClientModule } from '@angular/common/http';
import { SnotifyModule } from 'ng-snotify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SuperviseurModule } from '../SuperViseur/superviseur.module';
import { AppModule } from '../app.module';

const routes: Routes = [
  {
    path: '',
    component:DashboredComponent,
  children: [

     { path:'',
      component:ManageUsersComponent,
    },
    {
      path:'Users',
      component:ManageUsersComponent,
    }


],
},
];
@NgModule({
  declarations: [DashboredComponent,
    SidNavComponent,
     TopnavComponent, ManageUsersComponent,
     , FooterPharmacistComponent,
      EditUserComponent, AddUserComponent,
       AddProductComponent, EditProductComponent,
       AddElementPrescriptionComponent, ManageOrdersComponent, ManageProductComponent,
         , EditPharmacistComponent,
         EditElementComponent, OrderDetailsComponent,],
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
  ],
})
export class PharmacistModule { }
