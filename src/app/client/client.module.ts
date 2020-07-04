import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RxHistoryComponent } from './rx-history/rx-history.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomePageClientComponent } from './home-page-client/home-page-client.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '.././app.component';
import { LoginComponent } from '.././components/login/login.component';
import { SignUpComponent } from '.././components/sign-up/sign-up.component';
import { ProfilComponent } from '.././components/profil/profil.component';
import { PasswordComponent } from '.././components/password/password.component';
import { RequestComponent } from '.././components/password/request/request.component';
import { ResponseComponent } from '.././components/password/response/response.component';
import { AppRoutingModule } from '.././app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule   } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {JarwisService} from'../Services/jarwis.service';
import { TokenService } from '../Services/token.service';
import { AuthService } from '../Services/auth.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { NotifierModule } from "angular-notifier";
import { ToastrModule } from 'ngx-toastr';
import { HomePageComponent } from '.././Menu/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component:MainComponent,
  children: [
     {
       path:'',
       component:HomePageClientComponent
      },
      {
        path:'RxHistoryClient'
      ,
      component:RxHistoryComponent
      }
   ],
  },
];

@NgModule({
  declarations: [NavbarComponent, MenubarComponent, MainComponent, RxHistoryComponent, HomePageClientComponent],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, NgxPaginationModule

  ]
})
export class ClientModule { }
