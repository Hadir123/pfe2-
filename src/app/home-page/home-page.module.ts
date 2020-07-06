import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotifierModule } from 'angular-notifier';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path: '',
    component:HeaderComponent
  /*children: [
     {
       path:'',
       component:HeaderComponent
      },
  ]
*/}];
@NgModule({
  declarations: [FooterComponent, HeaderComponent, BodyComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, NgxPaginationModule,NotifierModule

  ],
  exports:[
      FooterComponent,
      HeaderComponent,
  ]
})
export class HomePageModule { }
