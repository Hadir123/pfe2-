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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    SnotifyModule,
    NotifierModule,
    ToastrModule// ToastrModule added,

  ],
  providers: [JarwisService,
  TokenService, AuthService,
  {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService],
  bootstrap: [AppComponent]

})
export class AppModule { }
