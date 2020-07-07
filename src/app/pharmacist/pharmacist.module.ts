import { NgModule } from '@angular/core';
import {RouterOutlet, ROUTES, Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import { DashboredComponent } from './dashbored/dashbored.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { FooterPharmacistComponent } from './footer-pharmacist/footer-pharmacist.component';
import {SidNavComponent} from'./sid-nav/sid-nav.component';
import {TopnavComponent} from'./topnav/topnav.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddElementPrescriptionComponent } from './add-element-prescription/add-element-prescription.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import {HttpClientModule} from '@angular/common/http';

import { NotifierModule } from "angular-notifier";
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductItemComponent } from './product-item/product-item.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ElementPrecriptionItemsComponent } from './element-precription-items/element-precription-items.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { EditPharmacistComponent } from './edit-pharmacist/edit-pharmacist.component';
import { EditElementComponent } from './edit-element/edit-element.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { ProfilComponent } from '../components/profil/profil.component';
import { RxHistoryComponent } from '../Vet/rx-history/rx-history.component';


const routes: Routes = [
  {
    path: '',
    component:DashboredComponent,
  children: [
   {
       path:'',
       component:ManageOrdersComponent
      },
      {path:'orders',component:ManageOrdersComponent},
        //{path:'orders',component:RxHistoryComponent},

      {
        path:'Users',
        component:ManageUsersComponent,
        data:{
        }
      },

      {
        path:'Products',
        component:ManageProductComponent,
      },
      {
        path:'editUser/:id',
        component:EditUserComponent,
      },
      {
        path:'edit2User/:id',
        component:EditPharmacistComponent,
      },
      {
        path:'addUser',
        component:AddUserComponent
      },
      {
        path:'addProduct',
        component:AddProductComponent
      },
      {
        path:'editProduct/:id',
        component:EditProductComponent
      },
      {
        path:'addElmenetPrescription/drug/:id',
        component:AddElementPrescriptionComponent
      },
      {
        path:'Products/editElement/:id',
        component:EditElementComponent
      },
      {
        path:'orderDetails/:id',
        component:OrderDetailsComponent
      },
      { path:'profil', component: ProfilComponent ,
 },
 { path: '**', redirectTo: '/HomePagePharmacist'},

    ],
  },
];
@NgModule({
  declarations: [],
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
 NotifierModule
  ]
})
export class PharmacistModule { }
