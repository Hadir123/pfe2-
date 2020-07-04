import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomePageComponent } from '.././Menu/home-page/home-page.component';
import { NavbarVetComponent } from '.././components/navbar-vet/navbar-vet.component';
import { AppRoutingModule } from '.././app-routing.module';
import { ReactiveFormsModule   } from '@angular/forms';
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

const routes: Routes = [
  {
    path: '',
    component:MainContentComponent,
  children: [
   {
       path:'',
       component:HomePageComponent
      },
     {
        path:'Vets'
      ,
      component:VetsComponent
      }
   ],
  },
];
@NgModule({
  declarations: [MainContentComponent, NavbarVetComponent, MenubarComponent, VetsComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    FormsModule, NgxPaginationModule ,ReactiveFormsModule,
    NgxSpinnerModule,

    HttpClientModule ,
   SnotifyModule,
    NotifierModule,
    ToastrModule,
 MatDatepickerModule,NgSelectModule,
 Ng2SearchPipeModule,
    NgxPaginationModule,
 OrderModule,
 NgbModule,
 //RouterModule.forRoot(routes),

  ],
})
export class SuperviseurModule { }
